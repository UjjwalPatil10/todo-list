import axios from "axios";

import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { IconButton } from "@mui/material";
import ViewIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import UserContext from "./UserContext";
import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";

const defaultUser = {
  name: "",
  age: "",
  mobile: "",
  email: "",
  status: "",
};

const UserApp = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState(defaultUser);

  const handleClose = () => {
    setOpen(false);
  };

  const loadUsers = async () => {
    const response = await axios.get("http://localhost:9999/users");
    // console.log("response: ", response?.data);
    setUsers(response?.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setInitialUser(defaultUser);
    setOperation("add");
    setOpen(true);
  };

  const editUser = (user) => {
    setOperation("edit");
    setInitialUser(user);
    setOpen(true);
  };

  const viewUser = (user) => {
    setOperation("view");
    setInitialUser(user);
    setOpen(true);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      axios
        .delete(`http://localhost:9999/users/${id}`)
        .then((res) => {
          if (result.isConfirmed) {
            loadUsers();
            Swal.fire("Deleted!", "User has been deleted.", "success");
          }
        })
        .catch((err) => {
          Swal.fire("Deleted!", "User has not been deleted.", "error");

          console.log(err);
        });
    });
  };

  const columns = [
    {
      name: "name",
      label: "name",
    },
    {
      name: "mobile",
      label: "Mobile",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "age",
      label: "Age",
    },
    {
      name: "status",
      label: "Status",
      options: {
        sort: false,
        filter: true,
        customBodyRender: (status) => (status == 1 ? "Active" : "Inactive"),
      },
    },
    {
      name: "action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => viewUser(user)}>
                <ViewIcon />
              </IconButton>

              <IconButton color="warning" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>

              <IconButton color="error" onClick={() => deleteUser(user._id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];

  return (
    <>
      <UserContext.Provider
        value={{
          open,
          handleClose,
          initialUser,
          operation,
          loadUsers,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>

      <Button variant="contained" onClick={addUser}>
        Create Task
      </Button>
      <MUIDataTable title="User List" data={users} columns={columns} />
    </>
  );
};

export default UserApp;
