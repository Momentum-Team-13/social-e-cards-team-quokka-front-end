import Card from "../../card/Card";
import "../../card.css";
import Sidebar from "../../sidebar/Sidebar";
import "../../sidebar/sidebar.css";

export default function Explore({ allCardList, allUsers, handleUserCardList }) {
    const sidebarTitle = "All QuokkaCards Users";
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
