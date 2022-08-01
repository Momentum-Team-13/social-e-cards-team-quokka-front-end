import Card from '../../card/Card'
import '../../card.css'
import Sidebar from '../../sidebar/Sidebar'
import '../../sidebar/sidebar.css'
import axios from 'axios'
import { useEffect } from 'react'


export default function Explore({cards, setCards, listType, setListType, otherUsers, setOtherUsers, token}) {
    useEffect(() => {
        setListType("All users")
    }, [setListType])

    useEffect(() =>{
        axios   
            .get('https://quokka-cards.herokuapp.com/users/', {
            })
            .then((res) => {
                // console.log('user results' + res.data)
                setOtherUsers(res.data)
            })
    }, [setOtherUsers])

    useEffect(() => {
        axios
            .get('https://quokka-cards.herokuapp.com/cards', {
            })
            .then((res) => {
                // console.log(res.data)
                setCards(res.data)
            })
    },[setCards])

    return (
        <div className="container">
            <Sidebar otherUsers={otherUsers} listType={listType}/>
            <Card cards={cards}/>
        </div>    
    )
}


