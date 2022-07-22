import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './features/redux/Pages/navbar/Header';
import { Routes,Route } from "react-router-dom";
import Home from './features/redux/home/Home';
import Details from './features/redux/Pages/Details';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='details/:id' element={<Details/>}/>
      </Routes>
    </div>
  );
}

export default App;
