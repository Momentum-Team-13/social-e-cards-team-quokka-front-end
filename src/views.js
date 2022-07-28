import { Route, Routes } from "react-router-dom";
import Home from './components/pages/homePage/HomePage'
import NewCard from './components/pages/newCardPage/NewCardPage'
import MyCards from './components/pages/myCardsPage/MyCardsPage'
import Explore from './components/pages/explorePage/ExplorePage'
import UserCards from './components/pages/userCardsPage/UserCardsPage'

export default function Views() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newcard" element={<NewCard />} />
      <Route path="/mycards" element={<MyCards />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/user/">
        <Route path=":id" element={<UserCards />} />
      </Route>
      <Route path="*" element={<div>404 Not Found! Invalid URL!</div>} />
    </Routes>
  );
};
