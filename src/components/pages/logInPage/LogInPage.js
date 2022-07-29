import "./logInPage.css";
import { useState } from "react";

export default function LogIn({token}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="logIn">
      <form className="logInWrapper">
        <div className="logInLeft">
          <h3 className="logo">QuakkaCards</h3>
          <span className="logInDescription">
            The place to connect and share e-cards with friends.
          </span>
        </div>
        <div className="logInRight">
          <div className="logInBox">
            <input
            //   onChange={handleUsername()}
              placeholder="Username"
              className="logInInput"
            />
            <input
            //   onChange={handlePassword()}
              type="password"
              placeholder="Password"
              className="logInInput"
            />
            <button className="logInButton">Log In</button>
            <span className="logInForgot">Forgot Password?</span>
            {/* <button className="registerButton">
            <Link to={"/Register"}>hi</Link>
            </button> */}
          </div>
        </div>
      </form>
    </div>
  );
}
