import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/landingpage/homepage";
import Login from "./Components/landingpage/login";
import Signup from "./Components/landingpage/signup";
import Navbar from './Components/Navbar/Navbar';
import Services from "./Components/landingpage/services";
import NoteState from "./context/notes/NoteState";
import AboutUs from "./Components/landingpage/aboutus";
import Palette from "./Components/homecomponents/palette";
import Cursor from "./Components/Cursor/Cursor";
import DrawRectangle from "./Components/homecomponents/DrawRectangle";

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Cursor/>
    <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/drawRectangle" element={<DrawRectangle/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/palette" element={<Palette />}/>
      </Routes>
    </Router>
    </NoteState>
      {/* <Navbar /> */}
    </>
  );
}

export default App;
