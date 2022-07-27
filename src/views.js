import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import NewCard from './components/pages/NewCardPage'
import MyCards from './components/pages/MyCardsPage'
import Explore from './components/pages/ExplorePage'
import UserCards from './components/pages/UserCardsPage'

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
