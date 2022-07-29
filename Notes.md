sidebar.css: 
.sidebar {
    border: 2px blue solid;
    padding: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.list {
    padding: 8px 0px;
}



Sidebar.js: 
import './sidebar.css'

export default function Sidebar() {
    return(
    <div className="container">
        <div className="sidebar">Sidebar
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
            <div className="list">Username</div>
        </div>
    </div>
    )
}