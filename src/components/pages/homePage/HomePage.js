import "./homePage.css";
import Card from "../../card/Card";
import "../../sidebar/sidebar.css";
import {Link} from 'react-router-dom'


export default function Home({ followCardList, following, handleUserCardList }) {
  const sidebarTitle = "People I follow";
  return (
    <>
      <div className="sidebar-container">
                <div className="sidebar">
                    <div className="sidebar-title">{sidebarTitle}</div>
                    <div className="sidebar-list-container">
                        {following.map((user) => (
                            <div>
                                {console.log(user)}
                                <Link to={`/users/${user.following_id}`} className="list">
                                    {user.following_username}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      <Card cards={followCardList} handleUserCardList={handleUserCardList} />
    </>
  );
}
