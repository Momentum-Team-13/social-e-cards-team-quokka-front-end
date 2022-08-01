import { useParams } from "react-router-dom"
import Sidebar from '../../sidebar/Sidebar';
import Card from '../../card/Card';

export default function UserCards() {
    const params=useParams();
    return (
        <div className="container">
            <div>{params.id}'s Cards Div</div>  
            <Sidebar />
            <div>
                All Cards
                <Card />
            </div>
        </div>   
    )
}