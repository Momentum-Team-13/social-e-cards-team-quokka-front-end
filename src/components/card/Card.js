import "./card.css"

export default function Card({info}) {
    return (
      <>
        <div className="card-container">
            <div className="card-title">{info.title}</div>
            <div className="card-message">{info.message}</div>
        </div>
      </>
    );
  }