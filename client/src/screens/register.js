import "../css/style.css";
import loginbg from "../images/loginbg.jpg";
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  async function createAccount(e) {
    e.preventDefault();

    try {
      const newUser = {
        newUser: {
          username: user.username,
          email: user.email,
          password: user.password,
          video: [],
        },
      };
      await axios.post("/adduser", newUser);
      alert("Account Created Please Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form">
      <form>
        <h1>Register</h1>
        <label>Username</label>
        <input
          onChange={handleChange}
          name="username"
          value={user.username}
          type="text"
          Placeholder="Enter your Username"
        ></input>
        <label>Email</label>
        <input
          onChange={handleChange}
          name="email"
          value={user.email}
          type="text"
          Placeholder="Enter your Email"
        ></input>
        <label>Password</label>
        <input
          onChange={handleChange}
          name="password"
          value={user.password}
          type="password"
          Placeholder="Enter your Password"
        ></input>

        <button onClick={createAccount}>Register</button>
      </form>
      <img src={loginbg} alt="loginbg" />
    </div>
  );
}

export default Register;
