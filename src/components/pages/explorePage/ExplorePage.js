// import Card from '../../../card/Card.js'
// import Card from '/Users/rachelkelly/Momentum/homework/social-e-cards/src/components/card/Card.js'
import Card from '../../card/Card'
import '../../card/card.css'
import Sidebar from '../../sidebar/Sidebar'
import '../../sidebar/sidebar.css'
import axios from 'axios'
import { useEffect } from 'react'

export default function Explore() {
    useEffect(() => {
        axios
            .get('https://quokka-cards.herokuapp.com/users', {
            })
            .then((res) => {
                console.log(res)
            })
    },[])

    return (
        <>
            <div className="container">
            <Sidebar />
            <Card />
            </div>
        </>
    )
}