import { useState } from 'react'
import { Link } from "react-router-dom";
import "../../card.css";
import "../../sidebar/sidebar.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);

export default function MyCards({ token, myCardList, followers }) {
    const sidebarTitle = "People Who Follow Me";
    console.log(followers);
    const [query, setQuery] = useState("");
    return (
        <div className='page'>
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-title">{sidebarTitle}</div>
                    <div className="sidebar-list-container">

                    <div className="search">
                        <label className="visually-hidden">Search for a User</label>
                        <input
                            placeholder="Search for a user"
                            onChange={(event) => setQuery(event.target.value)}
                            className="term input"
                        />
                        {followers
                            .filter((user) => {
                                if (query === "") {
                                    return user.user_username;
                                } else if (
                                    user.user_username
                                        .toLowerCase()
                                        .includes(query.toLocaleLowerCase())
                                ) {
                                    return user.user_username;
                                }
                            })
                            .map((user) => (
                                <div>
                                    {console.log(user)}
                                    <Link
                                        to={`/users/${user.user_id}`}
                                        className="list"
                                    >
                                        {user.user_username}
                                    </Link>
                                </div>
                            ))}
                    </div>
                    </div>
                </div>
            </div>

            <div className="card-list-container">
                <div className="card-list">
                    {myCardList.map((card) => (
                        <div className="card messageBox">
                            <div
                                className={`card-text bg-${card.bg_color} border-${card.border_color}`}
                            >
                                <div
                                    className={`card-title has-text-centered  ${card.font_color} ${card.font}`}
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
                                <div className="edit-link">
                                    <Link
                                        to={`/edit/${card.id}/`}
                                        token={token}
                                    >
                                        Edit Card
                                    </Link>
                                </div>
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
        </div>
    );
}
