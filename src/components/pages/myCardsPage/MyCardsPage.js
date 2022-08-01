import Sidebar from '../../sidebar/Sidebar'
import Card from '../../card/Card'
import axios from 'axios'
import { useState } from 'react'

export default function MyCard({token}) {
    const [cards, setCards] = useState([])

    axios
        .get('https://quokka-cards.herokuapp.com/profile', {
            headers: {
                Authorization: `Token ${token}`,
            },
        })
        .then((res) => {
            console.log(res.data)
            setCards(res.data)
        })

    return (
        <div className="container">
        <Sidebar />
        <div>
            My Cards
            <Card cards={cards}/>
            {/* Maybe call a different card element that includes edit and delete buttons in the card-footer? */}
        </div>
    </div>
    )
}