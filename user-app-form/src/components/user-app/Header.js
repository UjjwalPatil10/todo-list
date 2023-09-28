import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "./redux/store";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("Logout successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const islogin = useSelector((state) => state.islogin);
  console.log(islogin);
  return (
    <>
      <AppBar className="container" position="sticky">
        <Toolbar>
          <Typography variant="h4">Task Management App</Typography>
          {islogin && (
            <>
              <Box display={"flex"} marginLeft="auto">
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/home"
                >
                  Home
                </Button>
              </Box>
            </>
          )}
          {islogin && (
            <Button sx={{ margin: 1, color: "white" }} onClick={handleLogout}>
              Logout
            </Button>
          )}

          {!islogin && (
            <>
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
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
