import "../styles/App.css";
import Header from "./Header/Header";
import LeftNavBar from "./LeftNavBar/LeftNavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlightSearch from "./Searches/FlightSearch";
import BusSearch from "./Searches/BusSearch";
import HotelSearch from './Searches/HotelSearch';
import HotelResultPage from "./SearchResult/Hotels/HotelResultPage";
import BusResultPage from "./SearchResult/Bus/BusResultPage";
import FlightResultPage from "./SearchResult/Flight/FlightResultPage";
import { AuthProvider } from "../context/AuthContext";
import MobileTopNavbar from "./MobileTopNavbar/MobileTopNavbar";

function App() {
  return <div className="App ">
    <AuthProvider>
      <Router>
      <Header />
        <MobileTopNavbar />
        <div id="main-page" >
        <LeftNavBar />
        <Routes>
          <Route path='/' element={<FlightSearch />}></Route>
          <Route path='/bus' element={<BusSearch />}></Route>
          <Route path= '/hotels' element={<HotelSearch />}></Route>
          <Route path="/hotels/search" element={<HotelResultPage />} ></Route>
          <Route path="/bus/search" element={<BusResultPage />} ></Route>
          <Route path="/flight/search" element={<FlightResultPage />} ></Route>
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  </div>;
}

export default App;
