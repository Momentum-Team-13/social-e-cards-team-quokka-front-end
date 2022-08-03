import "./sidebar.css";

export default function Sidebar({ userNames, title }) {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-title">{title}</div>
                <div className="sidebar-list-container">
                    {userNames.map((user) => (
                        <div className="list">{user.id}</div>
                        // when BE changes follow model to include username, use user.username instead of user.id
                    ))}
                </div>
            </div>
        </div>
    );
}
