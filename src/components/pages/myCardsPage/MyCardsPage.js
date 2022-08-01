import Sidebar from '../../sidebar/Sidebar'
import Card from '../../card/Card'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function MyCards({token}) {
    const [cards, setCards] = useState([])
    const [otherUsers, setOtherUsers] = useState ([])
    const [listType, setListType] = useState("")

    useEffect(() => {
        setOtherUsers(["Username1", "Username2", "Username3"])
        setListType("Users who follow me")
    }, [])

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
        <Sidebar otherUsers={otherUsers} listType={listType} />
        <div>
            My Cards
            <Card cards={cards}/>
            {/* Maybe call a different card element that includes edit and delete buttons in the card-footer? */}
        </div>
    </div>
    )
}