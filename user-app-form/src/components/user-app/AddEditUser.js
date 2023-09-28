import React, { useContext } from "react";

import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import UserContext from "./UserContext";
import UserForm from "./UserForm";

const AddEditUser = () => {
  const { open, handleClose, operation } = useContext(UserContext);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"}User</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;
