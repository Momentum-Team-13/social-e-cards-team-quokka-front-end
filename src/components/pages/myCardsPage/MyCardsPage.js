import Sidebar from "../../sidebar/Sidebar";
import Card from "../../card/Card"
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function MyCards({
  token,
  cards,
  setCards,
  listType,
  setListType,
  otherUsers,
  setOtherUsers,
}) {
  useEffect(() => {
    setOtherUsers(["Username1", "Username2", "Username3"]);
    setListType("Users who follow me");
  }, [setOtherUsers, setListType]);

  useEffect(() => {
    axios
      .get("https://quokka-cards.herokuapp.com/profile", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setCards(res.data);
      });
  }, [token, setCards]);

  return (
    <>
      <Sidebar otherUsers={otherUsers} listType={listType} />
      <Card cards={cards}/>
      {/* <div className="my-card-container">
        {cards.map((card) => (
          <div className="my-card">
            <div
              className={`my-card-text bg-${card.bg_color} border-${card.border_color}`}
            >
              <div className={`my-card-title ${card.font_color} ${card.font}`}>
                {card.title}
              </div>
              <div className={`${card.font_color} ${card.font}`}>
                {card.message}
              </div>
            </div>

            <Link to={`/user/${card.username}`} className="btn btn-primary">
              Author: {card.username}
            </Link>
            <div className="edit-link">
              <Link to={`/edit/${card.id}/`}>Edit Card</Link>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
