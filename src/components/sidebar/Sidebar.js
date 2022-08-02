// import { useEffect, useState } from 'react'
import "./sidebar.css";

export default function Sidebar({ otherUsers, listType }) {
    return (
        <div className="container">
            <div className="sidebar">
                {listType}
                {otherUsers.map((otherUser) => (
                    <div className="list">{otherUser.username}</div>
                ))}
            </div>
        </div>
    );
}
