import { Link } from "react-router-dom";

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
                            <div className={`card-message has-text-centered ${card.font_color} ${card.font}`}>
                                {card.message}
                            </div>
                        </div>

                        <Link
                            to={`/user/${card.username}`}
                            className="btn btn-primary"
                        >
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
