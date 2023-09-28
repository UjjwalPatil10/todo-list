import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  //handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:9999/user/login", {
      email: input.email,
      password: input.password,
    });
    if (response) {
      alert("Login Successfull");
      navigate("/home");
    }
    // console.log("Data:",response?.data);
    setInput(response?.data);
    console.log("Input data:", input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display={"flex"}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="auto"
          borderRadius={5}
          marginTop={6}
          boxShadow="10px 10px 20px #ccc"
        >
          <Typography
            variant="h4"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
          >
            Login
          </Typography>

          <TextField
            sx={{ width: 390 }}
            required
            margin="normal"
            type={"text"}
            name="email"
            placeholder="Enter a email"
            onChange={handleChange}
            value={input.email}
          />
          <TextField
            sx={{ width: 390 }}
            required
            margin="normal"
            type={"text"}
            name="password"
            placeholder="Enter a password"
            onChange={handleChange}
            value={input.password}
          />

          <Button
            type="submit"
            sx={{ marginTop: 2, borderRadius: 3 }}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            sx={{ marginTop: 2, borderRadius: 3 }}
            onClick={() => navigate("/register")}
          >
            invalid email or password, please registered
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
