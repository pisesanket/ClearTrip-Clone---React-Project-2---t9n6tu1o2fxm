import "../styles/App.css";
import Header from "./Header/Header";
import LeftNavBar from "./LeftNavBar/LeftNavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from "./Searches/FlightSearch";

function App() {
  return <div className="App">
    <Router>
    <Header />
      <div id="main-page">
      <LeftNavBar />
      <Routes>
        <Route path='/' element={<FlightSearch />}></Route>
        <Route path='/hotels' element={''}></Route>
        <Route path= '/bus' element={''}></Route>
      </Routes>
      </div>
    </Router>
  </div>;
}

export default App;
