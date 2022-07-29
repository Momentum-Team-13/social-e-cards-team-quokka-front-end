import Card from "../../card/Card";
import "../../card.css";
import Sidebar from "../../sidebar/Sidebar";
import "../../sidebar/sidebar.css";


export default function Explore() {
    return (
        <div className="container">
            <Sidebar />
            <div>
                All Cards
                <Card />
            </div>
        </div>
    );
}


