import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);

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

            <div className="card-footer-item">
              <Link
                  to={`/users/${card.username}`}
                  className="btn btn-primary"
              >
                  {card.username}
              </Link>
              <div className="">
                  <ReactTimeAgo
                      date={card.created_at}
                      locale="en-US"
                      timeStyle="twitter"
                  />
              </div>
            </div>
      </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
