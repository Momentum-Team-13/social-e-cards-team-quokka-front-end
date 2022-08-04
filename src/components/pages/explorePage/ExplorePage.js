import Card from "../../card/Card";
import "../../card.css";
import Sidebar from "../../sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import axios from "axios";
import { useEffect } from "react";

export default function Explore({ allCardList, allUsers, handleUserCardList, setAllCardList, setAllUsers }) {
    const sidebarTitle = "All QuokkaCards Users";

    useEffect(() => {
        axios
            .get("https://quokka-cards.herokuapp.com/cards", {})
            .then((res) => {
                // console.log(res.data.results)
                setAllCardList(res.data.results);
            });
    }, [setAllCardList]);

    return (
        <div className="page">
            <Sidebar userNames={allUsers} title={sidebarTitle} />
            <div>
                <Card
                    cards={allCardList}
                    handleUserCardList={handleUserCardList}
                />
            </div>
        </div>
    );
}
