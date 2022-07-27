import React, { useEffect, useState } from "react";
// import cards from '../../sample-card-data'

function Card() {
    const cards = [
        {
            user_id: "user1",
            // created_at = ,
            title: "Title 1",
            message: "Message 1: I have some things to say",
            font: "cormorant",
            font_color: "purple",
            bg_color: "yellow",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user2",
            // created_at = ,
            title: "Title 2",
            message: "Message 2: I have some things to say",
            font: "font-family: 'Kaushan Script', cursive;",
            font_color: "white",
            bg_color: "black",
            border_color: "white",
            border_style: "dotted",
            // img_src = ,
        },
        {
            user_id: "user1",
            // created_at = ,
            title: "Title 3",
            message: "Message 3: I have some things to say",
            font: "font-family: 'Amatic SC', cursive;",
            font_color: "red",
            bg_color: "white",
            border_color: "green",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user1",
            // created_at = ,
            title: "Title 4",
            message: "Message 4: I have some things to say",
            font: "font-family: 'Bungee Shade', cursive;",
            font_color: "white",
            bg_color: "red",
            border_color: "yellow",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user1",
            // created_at = ,
            title: "Title 5",
            message: "Message 5: I have some things to say",
            font: "font-family: 'Righteous', cursive;",
            font_color: "purple",
            bg_color: "yellow",
            border_color: "brown",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user1",
            // created_at = ,
            title: "Title 6",
            message: "Message 6: I have some things to say",
            font: "font-family: 'Julius Sans One', sans-serif;",
            font_color: "yellow",
            bg_color: "blue",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user2",
            // created_at = ,
            title: "Title 7",
            message: "Message 7: I have some things to say",
            font: "font-family: 'Roboto', sans-serif",
            font_color: "green",
            bg_color: "white",
            border_color: "orange",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user2",
            // created_at = ,
            title: "Title 8",
            message: "Message 8: I have some things to say",
            font: "font-family: 'Spectral', serif;",
            font_color: "black",
            bg_color: "white",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user3",
            // created_at = ,
            title: "Title 9",
            message: "Message 9: I have some things to say",
            font: "font-family: 'Roboto', sans-serif;",
            font_color: "black",
            bg_color: "white",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
        {
            user_id: "user3",
            // created_at = ,
            title: "Title 10",
            message: "Message 10: I have some things to say",
            font: "font-family: 'Roboto', sans-serif;",
            font_color: "black",
            bg_color: "white",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
    ];

    const cardOne = cards[0];

    return (
        <div>
            <h1>Cards</h1>
            <div className="card">
                <div className={`card-content bg-${cardOne.bg_color} border-${cardOne.border_color}`}>
                    <div className={`${cardOne.font_color} ${cardOne.font}`}>
                        {cardOne.title}
                    </div>
                    <div className={`${cardOne.font_color} ${cardOne.font}`}>
                        {cardOne.message}
                    </div>
                </div>
                <div>Author: {cardOne.user_id}</div>
            </div>
        </div>
    );
}

export default Card;
