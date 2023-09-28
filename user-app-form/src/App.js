import Header from "./components/user-app/Header";
import UserApp from "./components/user-app/UserApp";
import Login from "./components/user-app/Login";
import Register from "./components/user-app/Register";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import GoToLogin from "./components/user-app/GoToLogin";
const App = () => {
  return (
    <>
      <UserApp />

      {/* <Header />

      <Routes>
        <Route path="/home" element={<UserApp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </>
  );
};

export default App;
