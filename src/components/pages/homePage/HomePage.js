import "./homePage.css";
import Sidebar from "../../sidebar/Sidebar";
import Card from "../../card/Card";
import { useEffect } from "react";

export default function Home({
    cards,
    setCards,
    listType,
    setListType,
    otherUsers,
    setOtherUsers,
}) {
    useEffect(() => {
        setOtherUsers(["Username1", "Username2", "Username3"]);
        setListType("Users I follow");
    }, [setOtherUsers, setListType]);

    useEffect(() => {
        setCards([
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
        ]);
    }, [setCards]);

    return (
        <div className="container">
            <Sidebar otherUsers={otherUsers} listType={listType} />
            <div>
                Cards by users I follow
                <Card cards={cards} />
            </div>
        </div>
    );
}
