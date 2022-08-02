import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/homePage/HomePage";
import NewCard from "./components/pages/newCardPage/NewCardPage";
import MyCards from "./components/pages/myCardsPage/MyCardsPage";
import Explore from "./components/pages/explorePage/ExplorePage";
import EditCard from "./components/EditCard"
import UserCards from "./components/pages/userCardsPage/UserCardsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/pages/logInPage/LogInPage";
import "bulma/css/bulma.min.css";
import useLocalStorageState from "use-local-storage-state";
import axios from "axios";
import { useState } from "react";

function App() {
  const [token, setToken] = useLocalStorageState("quokkaToken", null);
  const [username, setUsername] = useLocalStorageState("quokkaUsername", "");
  const [cards, setCards] = useState([]);
  const [otherUsers, setOtherUsers] = useState([]);
  const [listType, setListType] = useState("");


  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
  };

  const handleLogout = () => {
    // send request to log out on the server
    console.log(token, username);
    axios
      .post(
        "https://quokka-cards.herokuapp.com/api/auth/token/logout",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(() =>
        // log out in React
        setAuth("", null)
      );
  };

  if (!token) {
    return <LogIn setToken={setToken} setAuth={setAuth} />;
  }

  return (
    <BrowserRouter>
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              token={token}
              cards={cards}
              setCards={setCards}
              listType={listType}
              setListType={setListType}
              otherUsers={otherUsers}
              setOtherUsers={setOtherUsers}
            />
          }
        />
        <Route path="/newcard" element={<NewCard token={token} />} />
        <Route
          path="/mycards"
          element={
            <MyCards
              token={token}
              cards={cards}
              setCards={setCards}
              listType={listType}
              setListType={setListType}
              otherUsers={otherUsers}
              setOtherUsers={setOtherUsers}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <Explore
              token={token}
              cards={cards}
              setCards={setCards}
              listType={listType}
              setListType={setListType}
              otherUsers={otherUsers}
              setOtherUsers={setOtherUsers}
            />
          }
          />
        <Route path="/edit/">
        <Route
          path=":id"
          element={
            <EditCard
              token={token}
              cards={cards}
              setCards={setCards}
              listType={listType}
              setListType={setListType}
              otherUsers={otherUsers}
              setOtherUsers={setOtherUsers}
            />
          }
        />
        </Route>
        <Route path="/user/">
          <Route
            path=":id"
            element={
              <UserCards
                token={token}
                cards={cards}
                setCards={setCards}
                listType={listType}
                setListType={setListType}
                otherUsers={otherUsers}
                setOtherUsers={setOtherUsers}
              />
            }
          />
        </Route>
        <Route path="*" element={<div>404 Not Found! Invalid URL!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
