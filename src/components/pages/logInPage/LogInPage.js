import "./logInPage.css";
import axios from 'axios'
import { useState } from "react";
// import { Navigate } from 'react-router-dom'

export default function LogIn({setAuth}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null)

  const handleSubmit = (event) => {
    console.log(username, password)
    event.preventDefault()
    setError(null)
    // when the form submits, make an ajax request to the login endpoint
    // capture the auth token in state
    axios
      .post('https://quokka-cards.herokuapp.com/api/auth/token/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.auth_token
        setAuth(username, token)
        // the following console.log is so that the variable error is used on the page and we stop getting warnings about unused variables so our app will deploy on Netlify
        console.log(error)
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  return (
    <div className="logIn">
      <form className="logInWrapper" onSubmit={handleSubmit}>
        <div className="logInLeft">
          <h3 className="logo">QuokkaCards</h3>
          <span className="logInDescription">
            The place to connect and share e-cards with friends.
          </span>
        </div>
        <div className="logInRight">
          <div className="logInBox">
            <input
              placeholder="Username"
              className="logInInput"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="logInInput"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="logInButton">Log In</button>
            <span className="logInForgot">Forgot Password?</span>
          </div>
        </div>
      </form>
    </div>
  );
}
