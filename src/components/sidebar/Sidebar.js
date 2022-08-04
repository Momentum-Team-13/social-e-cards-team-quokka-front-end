import "./sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar({ userNames, title }) {
    const [query, setQuery] = useState("");

    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-title">{title}</div>
                <div className="sidebar-list-container">
                    <div className="search">
                        <label className="visually-hidden">
                            Search for a User
                        </label>
                        <input
                            placeholder="Search for a user"
                            onChange={(event) => setQuery(event.target.value)}
                            className="term input"
                        />
                        {userNames
                            .filter((user) => {
                                if (query === "") {
                                    return user.username;
                                } else if (
                                    user.username
                                        .toLowerCase()
                                        .includes(query.toLocaleLowerCase())
                                ) {
                                    return user.username;
                                }
                                return "";
                            })
                            .map((user) => (
                                <div>
                                    <Link
                                        to={`/users/${user.id}`}
                                        className="list"
                                    >
                                        {user.username}
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
