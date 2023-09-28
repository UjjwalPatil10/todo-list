import React, { useContext, useEffect, useState } from "react";
import { Grid, Card, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import UserContext from "./UserContext";
import axios from "axios";
// import { response } from "express";

const UserForm = () => {
  const { initialUser, operation, handleClose, loadUsers } =
    useContext(UserContext);

  const [user, setUser] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("user: ", user);

    if (operation == "edit") {
      //put request
      axios
        .put(`http://localhost:9999/users/${initialUser?._id}`, user)
        .then((response) => {
          handleClose();
          loadUsers();
          alert("User updated");
        })
        .catch((err) => {
          console.error(err);
          alert("Could not updated");
        });
    } else {
      //post request
      axios
        .post(`http://localhost:9999/users`, user)
        .then((response) => {
          handleClose();
          loadUsers();
          alert("User Created");
        })
        .catch((err) => {
          console.error(err);
          alert("Could not Created");
        });
    }
  };

  useEffect(() => {
    setUser({ ...user, ...initialUser });
  }, [initialUser]);

  const { name, age, mobile, email, status } = user;

  return (
    <>
      <Card variant="elevation" sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Mobile"
              name="mobile"
              value={mobile}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              type="number"
              label="Age"
              name="age"
              value={age}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="status"> Status</InputLabel>
              <Select
                labelId="status"
                id="demo-simple-select"
                value={status}
                label="Status"
                name="status"
                onChange={handleChange}
                defaultValue={status}
              >
                <MenuItem value={1}>Active</MenuItem>
                <MenuItem value={0}>Inactive</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit}>
              {operation == "edit" ? "Update" : "Create"}
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default UserForm;
