// import Card from '../../../card/Card.js'
// import Card from '/Users/rachelkelly/Momentum/homework/social-e-cards/src/components/card/Card.js'
import Card from "../../card/Card";
import "../../card.css";
import Sidebar from "../../sidebar/Sidebar";
import "../../sidebar/sidebar.css";
import axios from "axios";

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


