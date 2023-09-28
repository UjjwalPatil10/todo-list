import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const GoToLogin = () => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.islogin);
  console.log(islogin);
  return (
    <>
      <AppBar className="container" position="sticky">
        <Toolbar>
          <Typography variant="h4">Task Management App</Typography>

          <Box display={"flex"} marginLeft="auto">
            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/login"
            >
              Login
            </Button>

            <Button
              sx={{ margin: 1, color: "white" }}
              LinkComponent={Link}
              to="/register"
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default GoToLogin;
