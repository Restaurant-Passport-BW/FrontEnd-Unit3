import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogIn = props => {

    const [ returningUser, setReturningUser ] = useState({ username: "", password: ""});

    const handleReturningUser = e => {
        const { name, value } = e.target;
        setReturningUser({...returningUser, [name]: value})
    }

    const submitReturningUser = (e, creds) => {
        e.preventDefault();
        axios.post("https://foodie-passport.herokuapp.com/rpp/auth/login", creds)
            .then(res => {
                props.history.push("/protected");
                localStorage.setItem("token", res.data.token);
            })
            .catch(err => console.log(err));
    }

    
  return (
    <div>
      <form onSubmit={e => submitReturningUser(e, returningUser)}>
        <h3>Log in here.</h3>
        <label>Username</label>
        <input
          name="username"
          value={returningUser.username}
          onChange={handleReturningUser}
        />
        <label>password</label>
        <input
          name="password"
          value={returningUser.password}
          onChange={handleReturningUser}
        />
        <button>Log in</button>
        <p>
          No account? No worries! Sign up <Link to="/signup">here</Link>.
        </p>
      </form>
    </div>
  );
};


export default LogIn;

