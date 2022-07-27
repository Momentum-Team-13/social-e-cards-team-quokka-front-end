import { Route, Routes } from "react-router-dom";
import NewCard from './components/pages/NewCard'
import MyCards from './components/pages/MyCards'
import Explore from './components/pages/Explore'

export default function Views() {
  return (
    <Routes>
      <Route path="/newcard" element={<NewCard />} />
      <Route path="/mycards" element={<MyCards />} />
      <Route path="/explore" element={<Explore />} />
      {/* <Route path='/:id' element={<userCard />} /> */}
    </Routes>
  );
};
