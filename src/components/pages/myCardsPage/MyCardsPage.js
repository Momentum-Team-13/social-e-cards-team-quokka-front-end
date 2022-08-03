import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";
import "../../card.css";
import "../../sidebar/sidebar.css";


export default function MyCards({ token, myCardList, followers }) {
    const sidebarTitle = "People Who Follow Me"
    return (
        <>
            <Sidebar userNames={followers} title={sidebarTitle}/>
            <div className="card-list-container">
                    <div className="card-list">
                        {myCardList.map((card) => (
                            <div className="card messageBox">
                                <div
                                    className={`card-text bg-${card.bg_color} border-${card.border_color}`}
                                >
                                    <div
                                        className={`card-title ${card.font_color} ${card.font}`}
                                    >
                                        {card.title}
                                    </div>
                                    <div
                                        className={`${card.font_color} ${card.font}`}
                                    >
                                        {card.message}
                                    </div>
                                </div>

                                <Link
                                    to={`/user/${card.username}`}
                                    className="btn btn-primary"
                                >
                                    Author: {card.username}
                                </Link>
                                <div className="edit-link">
                                    <Link
                                        to={`/edit/${card.id}/`}
                                        token={token}
                                    >
                                        Edit Card
                                    </Link>
                                </div>
                                {/* add profile link to user */}
                            </div>
                        ))}
                    </div>
                </div>
        
        </>
    );
}
