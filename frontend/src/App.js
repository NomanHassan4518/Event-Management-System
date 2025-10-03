import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Events from "./Pages/Events";

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/events" element={<Events/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
