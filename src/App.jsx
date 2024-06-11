import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Error from "./pages/404";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="mt-28 px-[50px] md:px-[100px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
