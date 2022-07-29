import cards from '../../../sample-card-data'
import { useParams } from "react-router-dom"
import axios from 'axios';
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