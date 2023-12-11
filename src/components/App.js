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
import HotelDetail from "./Details/Hotel/HotelDetail";
import BusItinerary from "./Itinerary/Bus/BusItinerary";
import FlightItinerary from "./Itinerary/flight/FlightItinerary";
import HotelItinerary from "./Itinerary/Hotel/HotelItinerary";
import Payment from "./Payment/Payment";
import { LoginModalContextProvider } from "../context/LoginModalContext";
import BookingCalendar from "./BookingCalender";
import { BookingContextProvider } from "../context/BookingDetailContext";
import Trips from "./Trips/Trips";

function App() {
  return <div className="App ">
    <AuthProvider>
    <LoginModalContextProvider>
    <BookingContextProvider>
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
          <Route path="/hotel/details/:hotelId" element={<HotelDetail />}></Route>
          <Route path="/bus/detail/itinerary/:busId" element={<BusItinerary />}></Route>
          <Route path="/flight/detail/itinerary/:flightId" element={<FlightItinerary />}></Route>
          <Route path="/hotel/detail/itinerary/:hotelId" element={<HotelItinerary />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path='/date' element={<BookingCalendar />}></Route>
          <Route path="/trips" element={<Trips />}></Route>

        </Routes>
        </div>
      </Router>
    </BookingContextProvider>
    </LoginModalContextProvider>
    </AuthProvider>
  </div>;
}

export default App;
