import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Signup = props => {
  //state
  const [newUser, setNewUser] = useState({ username: "", password: "" , email: ""});

  const submitInfo = (event, creds) => {
    event.preventDefault();

    axios.post("https://foodie-passport.herokuapp.com/rpp/auth/register", creds)
        .then(res => {
            props.history.push("/protected");
        })
        .catch(err => console.log(err));
      }


  const handleNewUser = e => {
    const {name, value} = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div>
      <form onSubmit={e => submitInfo(e, newUser)}>
        <h3>Sign up!</h3>
        <label>username</label>
        <input
          type="text"
          value={newUser.username}
          name="username"
          onChange={handleNewUser}
        />
        <label>password</label>
        <input
          type="text"
          value={newUser.password}
          name="password"
          onChange={handleNewUser}
        />

        <input
          type="email"
          value={newUser.email}
          name="email"
          onChange={handleNewUser}
        />
        <button>Join the club!</button>
        <p>
          Already have a Foodie Passport?{" "}
          <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
};


export default Signup;



