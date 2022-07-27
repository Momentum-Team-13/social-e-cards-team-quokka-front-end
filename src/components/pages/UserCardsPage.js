import cards from '../../sample-card-data'
import { useParams } from "react-router-dom"

export default function UserCards() {
    const params=useParams();
    return (
        <div>{params.id}'s Cards Div</div>     
    )
}