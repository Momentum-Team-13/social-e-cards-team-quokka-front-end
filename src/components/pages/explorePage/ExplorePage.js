import Card from '../../card/Card'
import '../../card.css'
import Sidebar from '../../sidebar/Sidebar'
import '../../sidebar/sidebar.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function Explore() {
    const [cards, setCards] = useState([])
    const [otherUsers, setOtherUsers] = useState ([])
    const [listType, setListType] = useState("")

    useEffect(() => {
        setListType("All users")
    }, [])

    useEffect(() =>{
        axios   
            .get('https://quokka-cards.herokuapp.com/users/', {
            })
            .then((res) => {
                // console.log('user results' + res.data)
                setOtherUsers(res.data)
            })
    }, [])

    useEffect(() => {
        axios
            .get('https://quokka-cards.herokuapp.com/cards', {
            })
            .then((res) => {
                // console.log(res.data)
                setCards(res.data)
            })
    },[])

    return (
        <div className="container">
            <Sidebar otherUsers={otherUsers} listType={listType}/>
            <Card cards={cards}/>
        </div>    
    )
}


