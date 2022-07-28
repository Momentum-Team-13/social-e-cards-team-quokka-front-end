import './App.css';
import Header from './components/header/Header'
import Views from './views'
import { BrowserRouter } from 'react-router-dom'
import LogIn from './components/pages/logInPage/LogInPage'
import Register from './components/pages/registerPage/RegisterPage'



function App() {
  return (
    <BrowserRouter>
      {/* <Register /> */}
      <Header />
      <Views />
    </BrowserRouter>
  );
}

export default App;
