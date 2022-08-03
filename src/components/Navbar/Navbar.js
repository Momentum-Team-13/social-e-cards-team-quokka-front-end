import { Link } from "react-router-dom";
import "./navbar.css";
import "bulma/css/bulma.min.css";

export default function Navbar({ handleLogout }) {
  return (
    <nav>
      <div>Test</div>
      <label className="navlogo">QuokkaCards</label>
      <ul>
        <li>
          <div className="navlink">
            <Link to={"/"}>Home</Link>
          </div>
        </li>
        <li>
          <div className="navlink">
            <Link to={"/explore"}>Explore</Link>
          </div>
        </li>
        <li>
          <div className="navlink">
            <Link to={"/MyCards"}>My Cards</Link>
          </div>
        </li>
        <li>
          <div className="navlink">
            <Link to={"/NewCard"}>New Card</Link>
          </div>
        </li>
        <li>
          <div className="navlink" onClick={handleLogout}>
            <Link to={"/"}>Sign Out</Link>
          </div>
        </li>
      </ul>
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
