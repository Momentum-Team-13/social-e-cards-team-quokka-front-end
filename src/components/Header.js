import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>Header Div</div>
      <button>
        <Link to={"/explore"}>Explore</Link>
      </button>
      <button>
        <Link to={"/NewCard"}>New Card</Link>
      </button>
      <button>
        <Link to={"/"}>Home</Link>
      </button>
      <button>
        <Link to={"/MyCards"}>My Cards</Link>
      </button>
    </>
  );
}
