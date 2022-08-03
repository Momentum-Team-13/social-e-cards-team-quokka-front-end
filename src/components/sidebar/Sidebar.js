// import { useEffect, useState } from 'react'
import "./sidebar.css";

export default function Sidebar({ otherUsers, listType }) {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="sidebar-title">{listType}</div>
                <div className="sidebar-list-container">
                {otherUsers.map((otherUser) => (
                    <div className="list">{otherUser.username}</div>
                ))}
                </div>
            </div>
        </div>
    );
}
