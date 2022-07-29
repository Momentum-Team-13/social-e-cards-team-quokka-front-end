import './homePage.css'
import Sidebar from '../../sidebar/Sidebar'
import Card from '../../card/Card'

export default function Home() {
    return (
        <div className="container">
            <Sidebar />
            <div>
                Cards by users I follow
                <Card />
            </div>
        </div>
    )
}