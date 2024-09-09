import { Routes, Route } from "react-router-dom";  
import Home from "./Routes/Home"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
