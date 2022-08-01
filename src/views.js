import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/homePage/HomePage";
import NewCard from "./components/pages/newCardPage/NewCardPage";
import MyCards from "./components/pages/myCardsPage/MyCardsPage";
import Explore from "./components/pages/explorePage/ExplorePage";
import UserCards from "./components/pages/userCardsPage/UserCardsPage";

export default function Views({
    token,
    cards,
    setCards,
    listType,
    setListType,
    otherUsers,
    setOtherUsers,
}) {
    return (
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
    );
}
