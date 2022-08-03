import "./homePage.css";
import Sidebar from "../../sidebar/Sidebar";
import Card from "../../card/Card";

export default function Home({ followCardList, following }) {
    const sidebarTitle= "People I follow"
    return (
        <div className="container">
            <Sidebar userNames={following} title={sidebarTitle}/>
            <div>
                <Card cards={followCardList} />
            </div>
        </div>
    );
}
