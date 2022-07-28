import './logInPage.css'

export default function LogIn() {
    return(
        <div className="logIn">
            <div className="logInWrapper">
                <div className="logInLeft">
                    <h3 className="logo">QuakkaCards</h3>
                    <span className="logInDescription">
                        The place to connect and share e-cards with friends. 
                    </span>
                </div>
                <div className="logInRight">
                    <div className="logInBox">
                        <input placeholder="Username" className="logInInput"/>
                        <input placeholder="Password" className="logInInput"/>
                        <button className="logInButton">Log In</button>
                        <span className="logInForgot">Forgot Password?</span>
                        <button className="registerButton">Register New Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}