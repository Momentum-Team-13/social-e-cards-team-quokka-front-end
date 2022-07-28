import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <>
      <div class="title">QUAKKA CARDS</div>
      <div class="navbar">
        <button class="active">
          <Link to={"/"}>Home</Link>
        </button>
        <button>
          <Link to={"/MyCards"}>My Cards</Link>
        </button>
        <button>
          <Link to={"/explore"}>Explore</Link>
        </button>
        <button>
          <Link to={"/NewCard"}>New Card</Link>
        </button>
      </div>
    </>
  );
}
