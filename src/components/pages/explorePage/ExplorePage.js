import Card from "../../card/Card";
import "../../card.css";
import Sidebar from "../../sidebar/Sidebar";
import "../../sidebar/sidebar.css";

export default function Explore({ allCardList, allUsers }) {
    const sidebarTitle="All QuokkaCards Users"
    return (
        <div className="container">
            <Sidebar userNames={allUsers} title={sidebarTitle}/>
            <Card cards={allCardList} />
        </div>
    );
}
