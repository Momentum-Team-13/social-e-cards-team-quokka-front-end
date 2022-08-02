import "./logInPage.css";
import axios from "axios";
import { useState } from "react";
export default function LogIn({ setAuth }) {
    const [username, setUsername] = useState();
    const [regUsername, setRegUsername] = useState();
    const [password, setPassword] = useState();
    const [regPassword, setRegPassword] = useState();
    const [error, setError] = useState(null);
    const [registerClicked, setRegisterClicked] = useState(false);
    const toggleFormButton = () => {
        setRegisterClicked(!registerClicked);
    };
    const handleRegistration = (event) => {
        // console.log(regUsername, regPassword);
        event.preventDefault();
        setError(null);
        axios
            .post("https://quokka-cards.herokuapp.com/api/auth/users/", {
                username: regUsername,
                password: regPassword,
            })
            .then(() => {
                alert(
                    "Successful Registration. Please proceed with logging in!"
                );
                // the following console.log is so that the variable error is used on the page and we stop getting warnings about unused variables so our app will deploy on Netlify
                console.log(error);
                toggleFormButton();
            })
            .catch((error) => {
                setError(error.message);
                alert(
                    "Password is either too similar to username or does not meet minimum 8 characters!"
                );
            });
    };
    const handleSubmit = (event) => {
        console.log(username, password);
        event.preventDefault();
        setError(null);
        // when the form submits, make an ajax request to the login endpoint
        // capture the auth token in state
        axios
            .post("https://quokka-cards.herokuapp.com/api/auth/token/login", {
                username: username,
                password: password,
            })
            .then((res) => {
                const token = res.data.auth_token;
                setAuth(username, token);
                // the following console.log is so that the variable error is used on the page and we stop getting warnings about unused variables so our app will deploy on Netlify
                console.log(error);
            })
            .catch((error) => {
                alert("Invalid Credentials!");
                setError(error.message);
            });
    };
    return (
        <div className="logincontainer">
            {registerClicked === false ? (
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
                            <button type="submit" className="logInButton">
                                Log In
                            </button>
                            <button
                                type="button"
                                className="registrationButton"
                                onClick={toggleFormButton}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="logincontainer">
                    <form
                        className="logInWrapper"
                        onSubmit={handleRegistration}
                    >
                        <div className="logInLeft">
                            <h3 className="logo">QuokkaCards</h3>
                            <span className="logInDescription">
                                Easily sign up today to get started.
                            </span>
                        </div>
                        <div className="logInRight">
                            <div className="logInBox">
                                <input
                                    placeholder="Username"
                                    className="logInInput"
                                    onChange={(e) =>
                                        setRegUsername(e.target.value)
                                    }
                                />
                                <input
                                    placeholder="Password"
                                    className="logInInput"
                                    onChange={(e) =>
                                        setRegPassword(e.target.value)
                                    }
                                />
                                <button
                                    className="submitRegistrationButton"
                                    type="submit"
                                >
                                    Submit Registration
                                </button>
                                <button
                                    className="returnButton"
                                    type="button"
                                    onClick={toggleFormButton}
                                >
                                    Return to Log In
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
