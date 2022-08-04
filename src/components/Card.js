import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

function Card({ cards }) {
  return (
    <div className="card-list-container">
      <div className="card-list">
        {cards.map((card) => (
          <div className="card messageBox">
            <div
              className={`card-text bg-${card.bg_color} border-${card.border_color}`}
            >
              <div
                className={`card-title has-text-centered ${card.font_color} ${card.font}`}
              >
                {card.title}
              </div>
              <div
                className={`card-message has-text-centered ${card.font_color} ${card.font}`}
              >
                {card.message}
              </div>
            </div>

            <Link to={`/users/${card.user_id}`} className="btn btn-primary">
              Author: {card.username}
            </Link>
            {/* add profile link to user */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
