import "./homePage.css";
import Sidebar from "../../sidebar/Sidebar";
import Card from "../../card/Card";

export default function Home({ followCardList, following }) {
    return (
        <div className="container">
            <Sidebar following={following} />
            <div>
                Cards by users I follow
                <Card followCardList={followCardList} />
            </div>
        </div>
    );
}
