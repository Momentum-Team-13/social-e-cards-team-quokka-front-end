import { Link } from "react-router-dom";
import "./header.css";

export default function Header({handleLogout}) {
    return (
        <div className="header">
            <button className="sign-out button is-small" onClick={handleLogout}>
            <Link to={"/"}>Sign Out</Link></button>
            <div className="app-title">QUOKKA CARDS</div>
            <div className="nav">
                <div className="">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="">
                    <Link to={"/explore"}>Explore</Link>
                </div>
                <div className="">
                    <Link to={"/MyCards"}>My Cards</Link>
                </div>
                <div className="">
                    <Link to={"/NewCard"}>New Card</Link>
                </div>
            </div>
        </div>
    );
}
