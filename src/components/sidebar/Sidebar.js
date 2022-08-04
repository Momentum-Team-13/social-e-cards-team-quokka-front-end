import "./sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar({ userNames, title }) {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-title">{title}</div>
                <div className="sidebar-list-container">
                    {userNames.map((user) => (
                        <div>
                            {/* {console.log(user)} */}
                            <Link to={`/users/${user.id}`} className="list">
                                {user.username}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
