import Card from '../../card/Card.js'
import data from '../../../sample-card-data'

export default function Explore() {
    return (
        <>
            <div className="explore-container">
            {data.map((info) => (
                    <Card key={info.id} info={info}/>
                ))}
            </div>
        </>
    )
}