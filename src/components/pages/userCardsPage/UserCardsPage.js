import Sidebar from "../../sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./userCardsPage.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);

export default function UserCards({ token, allUsers, following, setAllUsers }) {
    const { id } = useParams();

    // console.log({id})
    const [userCardList, setUserCardList] = useState([]);
    const [error, setError] = useState(null);
    const follow_id = parseInt(`${id}`);

    const followingId = [];

    useEffect(() => {
        following.map((user) => followingId.push(user.following_id));
    }, [following, followingId]);

    const [followingArray, setFollowingArray] = useState(followingId);

    console.log(followingArray);
    console.log(follow_id);
    console.log(followingArray.includes(follow_id));
    console.log(followingArray.includes(`${id}`));

    const handleFollow = (event) => {
        event.preventDefault();
        setError(null);
        axios
            .post(
                "https://quokka-cards.herokuapp.com/users/follow/",
                {
                    following: `${id}`,
                },
                {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }
            )
            .then(() => {
                setFollowingArray([...followingArray, follow_id]);
                console.log(error);
            })
            .catch((error) => {
                setError(error.message);
                alert(error);
            });
    };

    const handleUnfollow = (event) => {
        event.preventDefault();
        setError(null);
        axios
            .delete(`https://quokka-cards.herokuapp.com/users/unfollow/${id}`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then(() => {
                const holdingValue = followingArray.filter(
                    (item) => item !== follow_id
                );
                setFollowingArray(holdingValue);
                console.log(error);
            })
            .catch((error) => {
                setError(error.message);
                alert(error);
            });
    };

    useEffect(() => {
        axios
            .get(`https://quokka-cards.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                setUserCardList(res.data.results);
            });
    }, [id, token]);

    useEffect(() => {
      axios
          .get("https://quokka-cards.herokuapp.com/users/", {})
          .then((res) => {
              // console.log('user results' + res.data)
              setAllUsers(res.data.results);
          });
  }, [setAllUsers]);

    const sidebarTitle = "All QuokkaCards Users";
    return (
        <>
            <Sidebar userNames={allUsers} title={sidebarTitle} />
            {followingArray.includes(follow_id) === false ? (
                <div className="follow-button-container">
                    <button className="follow-button" onClick={handleFollow}>
                        Follow
                    </button>
                </div>
            ) : (
                <div className="follow-button-container">
                    <button className="follow-button" onClick={handleUnfollow}>
                        Unfollow
                    </button>
                </div>
            )}
            <div className="card-list-container">
                <div className="card-list">
                    {userCardList.length === 0 ? (
                        <div className="card messageBox">
                            No Cards to Display!
                        </div>
                    ) : (
                        ""
                    )}
                    {userCardList.map((card) => (
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
                                <div>{card.username}</div>

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
        </>
    );
}
