import './registerPage.css'

export default function Register() {
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
                        <input placeholder="Security Question: How old are you?" className="security"/>
                        <button className="registerButton">Submit Registration</button>
                    </div>
                </div>
            </div>

        </div>
    )
}