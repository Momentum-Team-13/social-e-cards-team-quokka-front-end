import "./homePage.css";
import Card from "../../card/Card";
import "../../sidebar/sidebar.css";
import {Link} from 'react-router-dom'
import { useState } from "react";

export default function Home({ followCardList, following, handleUserCardList }) {
  const sidebarTitle = "People I follow";
  const [query, setQuery] = useState("");

  return (
    <>
    {console.log(following)}
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
                        {following
                            .filter((user) => {
                              console.log(user.following_username)
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
                                        to={`/users/${user.id}`}
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
      <Card cards={followCardList} handleUserCardList={handleUserCardList} />
    </>
  );
}
