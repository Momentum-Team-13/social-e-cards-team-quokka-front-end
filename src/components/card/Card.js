import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            font: "kaushan",
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
            font: "amatic",
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
            font: "bungee",
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
            font: "righteous",
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
            font: "julius",
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
            font: "roboto",
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
            font: "spectral",
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
            font: "roboto",
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
            font: "roboto",
            font_color: "black",
            bg_color: "white",
            border_color: "black",
            border_style: "solid",
            // img_src = ,
        },
    ];

    return (
        <div>
            <div className="card-list">
            {cards.map((card) =>

                <div className="card messageBox" >

                    <div className={`card-text bg-${card.bg_color} border-${card.border_color}`}>
                        <div className={`${card.font_color} ${card.font}`}>
                            {card.title}
                        </div>
                        <div className={`${card.font_color} ${card.font}`}>
                            {card.message}
                        </div>
                    </div>

                    <Link to={`/user/${card.user_id}`} className="btn btn-primary">Author: {card.user_id}</Link>

                    {/* add profile link to user */}
                </div>
            )}
            </div>
        </div>
    );
}

export default Card;
