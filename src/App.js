import './App.css';
import Header from './components/header/Header'
import Views from './views'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Views />
    </BrowserRouter>
  );
}

export default App;
