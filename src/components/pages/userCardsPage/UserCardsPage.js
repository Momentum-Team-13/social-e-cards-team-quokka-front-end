import Sidebar from "../../sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
// import Card from "../../card/Card";
// import { useEffect } from "react";
// import { useParams } from 'react-router-dom'

export default function UserCards({ token, allUsers }) {
  const { id } = useParams();
  // console.log({id})
  const [userCardList, setUserCardList] = useState([]);
  const [toggleFollow, setToggleFollow] = useState(false);
  const [error, setError] = useState(null);

  const toggleFollowButton = () => {
    setToggleFollow(!toggleFollow);
  };

  const handleFollow = (event) => {
    // console.log(regUsername, regPassword);
    event.preventDefault();
    setError(null);
    axios
      .post("https://quokka-cards.herokuapp.com/users/follow/", 
        {
            following: `${id}`
        },
        {
        headers: {
            Authorization: `Token ${token}`
    },
})
      .then(() => {
        // the following console.log is so that the variable error is used on the page and we stop getting warnings about unused variables so our app will deploy on Netlify
        console.log(error);
        toggleFollowButton();
      })
      .catch((error) => {
        setError(error.message);
        alert(error);
      });
  };

  const handleUnfollow = (event) => {
    // console.log(regUsername, regPassword);
    event.preventDefault();
    setError(null);
    axios
      .delete(`https://quokka-cards.herokuapp.com/users/unfollow/${id}`,
        {
        headers: {
            Authorization: `Token ${token}`
    },
})
      .then(() => {
        // the following console.log is so that the variable error is used on the page and we stop getting warnings about unused variables so our app will deploy on Netlify
        console.log(error);
        toggleFollowButton();
      })
      .catch((error) => {
        setError(error.message);
        alert(error);
      });
  };

  // axios request here to get user's cards
  useEffect(() => {
    axios
      .get(`https://quokka-cards.herokuapp.com/users/${id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUserCardList(res.data);
      });
  }, []);

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
              <div>Author: {card.username}</div>
            </div>
          ))}
        </div>
      </div>
      {toggleFollow === false ? (
        <button onClick={handleFollow} className="follow-button">Follow</button>
      ) : (
        <button onClick={handleUnfollow} className="follow-button">Don't Follow</button>
      )}
    </>
  );
}
