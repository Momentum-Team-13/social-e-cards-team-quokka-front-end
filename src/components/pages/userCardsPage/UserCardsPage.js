import Sidebar from "../../sidebar/Sidebar";
import Card from "../../card/Card";
// import { useEffect } from "react";
// import { useParams } from 'react-router-dom'

export default function UserCards() {
    return (
        <div className="container">
            <div></div>
            <Sidebar  />
            <div>
                All Cards
                <Card  />
            </div>
        </div>
    );
}
