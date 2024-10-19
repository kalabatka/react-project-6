import {Router, Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import './App.css';
import Home from './Home/Home';
import Close from './Close/Close';
import Open from './Open/Open';
import Redirect from './Redirect/Redirect';
import "./styles.css"


 function App() {
  return (
    <div className='App'>
      <h1>Homework 6</h1>
      
        <div className="router-nav-container">
          <nav className="navigation-menu">
            <div className="navigation-menu_container">
              <div className="navigation-menu-part">
                <Link to="/home">Домой</Link>
              </div>
              <div className="navigation-menu-part">
                <Link to="/close">Закрыть</Link>
              </div>
              <div className="navigation-menu-part">
                <Link to="/open">Открыть</Link>
              </div>
              <div className="navigation-menu-part">
                <Link to="/home">Вернуться</Link>
              </div>
            </div>
          </nav>
        </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/close" element={<Close />} />
        <Route path="/open" element={<Open />} />
        <Route path="/home" element={<Redirect />} />
        </Routes>

    </div>
  );
};
export default App;


