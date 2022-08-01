import "./App.css";
import Header from "./components/header/Header";
import Views from "./views";
import { BrowserRouter } from "react-router-dom";
import LogIn from "./components/pages/logInPage/LogInPage";
// import Register from './components/pages/registerPage/RegisterPage'
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

    const isLoggedIn = username && token;

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
        return (
            <LogIn
                setToken={setToken}
                setAuth={setAuth}
                isLoggedIn={isLoggedIn}
            />
        );
    }

    return (
        <BrowserRouter>
            <Header handleLogout={handleLogout} />
            <Views
                token={token}
                cards={cards}
                setCards={setCards}
                listType={listType}
                setListType={setListType}
                otherUsers={otherUsers}
                setOtherUsers={setOtherUsers}
            />
        </BrowserRouter>
    );
}

export default App;
