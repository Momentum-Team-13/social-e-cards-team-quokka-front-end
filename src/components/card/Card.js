import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";

function Card({ cards }) {
    const following = ["connor", "admin"];

    const handleFollow = () => {
        console.log("follow");
        // axios   
        //     .post('https://quokka-cards.herokuapp.com/users/follow', {
        //         user: 
        //         following: 
        //     }
        //     {
        //         headers: {
        //             Authorization: `Token ${token}`,
        //         }
        //     })
        // axios request will go here
    };

    const handleUnfollow = () => {
        console.log("unfollow");
        // axios request will go here
    };

    return (
        <div>
            <div className="card-list">
                {cards.map((card) => (
                    <div className="card messageBox">
                        <div
                            className={`card-text bg-${card.bg_color} border-${card.border_color}`}
                        >
                            <div
                                className={`card-title ${card.font_color} ${card.font}`}
                            >
                                {card.title}
                            </div>
                            <div className={`${card.font_color} ${card.font}`}>
                                {card.message}
                            </div>
                        </div>

                        {/* if card.username appears in following array, show filled heart icon. if not, show outline heart icon. clicking on the icon sends POST request to API and changes  */}

                        <Link
                            to={`/user/${card.user_id}`}
                            className="btn btn-primary"
                        >
                            {card.username}
                        </Link>

                        {following.includes(`${card.username}`) ? (
                            <FaHeart onClick={handleUnfollow()} />
                        ) : (
                            <FaRegHeart onClick={handleFollow()} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
