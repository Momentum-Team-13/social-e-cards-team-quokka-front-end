import { Link } from "react-router-dom";
import "./navbar.css";
import "bulma/css/bulma.min.css";

export default function Navbar({ handleLogout }) {
    return (
            <nav className="nav">
                <label className="navlogo">QuokkaCards</label>
                <ul>
                    <li>
                        <div>
                            <Link to={"/"} className="navlink">
                                Home
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to={"/explore"} className="navlink">
                                Explore
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to={"/MyCards"} className="navlink">
                                My Cards
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link to={"/NewCard"} className="navlink">
                                New Card
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div onClick={handleLogout}>
                            <Link to={"/"} className="navlink">
                                Sign Out
                            </Link>
                        </div>
                    </li>
                </ul>
                <div className="nav-bottom-padding"></div>
            </nav>
        
        // <div className="header">
        //     <button className="sign-out button is-small" onClick={handleLogout}>
        //     <Link to={"/"}>Sign Out</Link></button>
        //     <div className="app-title">QuokkaCards</div>
        //     <div className="nav">
        //         <div className="">
        //             <Link to={"/"}>Home</Link>
        //         </div>
        //         <div className="">
        //             <Link to={"/explore"}>Explore</Link>
        //         </div>
        //         <div className="">
        //             <Link to={"/MyCards"}>My Cards</Link>
        //         </div>
        //         <div className="">
        //             <Link to={"/NewCard"}>New Card</Link>
        //         </div>
        //     </div>
        // </div>
    );
}
