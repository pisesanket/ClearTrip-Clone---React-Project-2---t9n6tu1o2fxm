import "../styles/App.css";
import Header from "./Header/Header";
import LeftNavBar from "./LeftNavBar/LeftNavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from "./Searches/FlightSearch";
import BusSearch from "./Searches/BusSearch";
import HotelSearch from './Searches/HotelSearch';

function App() {
  return <div className="App">
    <Router>
    <Header />
      <div id="main-page">
      <LeftNavBar />
      <Routes>
        <Route path='/' element={<FlightSearch />}></Route>
        <Route path='/bus' element={<BusSearch />}></Route>
        <Route path= '/hotels' element={<HotelSearch />}></Route>
      </Routes>
      </div>
    </Router>
  </div>;
}

export default App;
