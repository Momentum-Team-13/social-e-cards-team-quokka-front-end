// import { useEffect, useState } from 'react'
import "./sidebar.css";

export default function Sidebar({ userNames, title }) {
    return (
        <div className="container">
            <div className="sidebar">
                <div>{title}</div>

                {userNames.map((user) => (
                    <div className="list">{user.id}</div>
                    // when BE changes follow model to include username, use user.username instead of user.id
                ))}
            </div>
        </div>
    );
}
