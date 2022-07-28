import './App.css';
import Header from './components/header/Header'
import Views from './views'
import { BrowserRouter } from 'react-router-dom'
import LogIn from './components/pages/logInPage/LogInPage'
import Register from './components/pages/registerPage/RegisterPage'
import 'bulma/css/bulma.min.css';



function App() {
  return (
    <BrowserRouter>
      {/* <LogIn />
      <Register /> */}
      <Header />
      <Views />
    </BrowserRouter>
  );
}

export default App;
