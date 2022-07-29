// import Card from '../../../card/Card.js'
// import Card from '/Users/rachelkelly/Momentum/homework/social-e-cards/src/components/card/Card.js'
import Card from '../../card/Card'
import '../../card/card.css'
import Sidebar from '../../sidebar/Sidebar'
import '../../sidebar/sidebar.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Explore() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios
            .get('https://quokka-cards.herokuapp.com/cards', {
            })
            .then((res) => {
                console.log(res.data)
                setCards(res.data)
            })
    },[])

    return (
        <>
            <div className="container">
            <Sidebar />
            <Card cards={cards}/>
            </div>
        </>
    )
}