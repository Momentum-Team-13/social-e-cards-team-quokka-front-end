import cards from '../../../sample-card-data'
import axios from 'axios'
import Sidebar from '../../sidebar/Sidebar'
import Card from '../../card/Card'

export default function MyCard() {
    return (
        <div className="container">
        <Sidebar />
        <div>
            My Cards
            <Card />
            {/* Maybe call a different card element that includes edit and delete buttons in the card-footer? */}
        </div>
    </div>
    )
}