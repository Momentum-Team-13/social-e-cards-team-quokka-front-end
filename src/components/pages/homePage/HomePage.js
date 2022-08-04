import "./homePage.css";
import Card from "../../card/Card";
import "../../sidebar/sidebar.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home({
    followCardList,
    following,
    handleUserCardList,
    setFollowCardList,
    setFollowing,
    token
}) {
    const sidebarTitle = "People I follow";
    const [query, setQuery] = useState("");

    useEffect(() => {
        axios
            .get("https://quokka-cards.herokuapp.com/cards/timeline", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                // console.log(res.data.results);
                setFollowCardList(res.data.results);
            });
    }, [token, setFollowCardList]);

    useEffect(() => {
        axios
            .get("https://quokka-cards.herokuapp.com/following/", {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                // console.log(res.data.results);
                setFollowing(res.data.results);
            });
    }, [token, setFollowing]);

    return (
        <div>
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-title">{sidebarTitle}</div>
                    <div className="sidebar-list-container">
                        <div className="search">
                            <label className="visually-hidden">
                                Search for a User
                            </label>
                            <input
                                placeholder="Search for a user"
                                onChange={(event) =>
                                    setQuery(event.target.value)
                                }
                                className="term input"
                            />
                            {following
                                .filter((user) => {
                                    if (query === "") {
                                        return user.following_username;
                                    } else if (
                                        user.following_username
                                            .toLowerCase()
                                            .includes(query.toLocaleLowerCase())
                                    ) {
                                        return user.following_username;
                                    }
                                })
                                .map((user) => (
                                    <div>
                                        {console.log(user)}
                                        <Link
                                            to={`/users/${user.following_id}`}
                                            className="list"
                                        >
                                            {user.following_username}
                                        </Link>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Card
                    cards={followCardList}
                    handleUserCardList={handleUserCardList}
                />
            </div>
        </div>
    );
}
