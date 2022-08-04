import Sidebar from "../../sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ReactTimeAgo from "react-time-ago";
TimeAgo.addDefaultLocale(en);

export default function UserCards({ token, allUsers }) {
    const { id } = useParams();
    // console.log({id})
    const [userCardList, setUserCardList] = useState([]);
    // axios request here to get user's cards

    useEffect(() => {
        axios
            .get(`https://quokka-cards.herokuapp.com/users/${id}`, {
                headers: {
                    Authorization: `Token ${token}`,
                },
            })
            .then((res) => {
                console.log(res.data.results);
                setUserCardList(res.data.results);
            });
    }, [id, token]);

    const sidebarTitle = "All QuokkaCards Users";
    return (
        <>
            <Sidebar userNames={allUsers} title={sidebarTitle} />

            <div className="card-list-container">
                <div className="card-list">
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
