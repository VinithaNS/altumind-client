// import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import "./App.css";

import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Design from "./components/Design";
import Development from "./components/Development";
import DigitalConsulting from "./components/DigitalConsulting";
import DigitalMarketing from "./components/DigitalMarketing";
import Digitals from "./components/Digitals";
import Footer from "./components/Footer";
import HomeScreen from "./components/HomeScreen";
import Insights from "./components/Insights";
import MainBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Culture from "./components/Careers/Culture";
import CurrentOpenings from "./components/Careers/CurrentOpenings";
function App() {
  return (
    <div>
      <MainBar />
      <Router>
        <Routes>
          
          <Route index element={<HomeScreen />} />
          <Route path="/" element={<HomeScreen />} />
          <Route index element={<Services />} />
          <Route index element={<Blog />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/development" element={<Development />} />
          <Route
            path="/services/digitalmarketing"
            element={<DigitalMarketing />}
          />
          <Route
            path="/services/digitalconsulting"
            element={<DigitalConsulting />}
          />
          <Route path="/blog/insights" element={<Insights />} />
          <Route path="/blog/digitals" element={<Digitals />} />
          <Route path="/careers/culture" element={<Culture />} />
          <Route
            path="/careers/currentopenings"
            element={<CurrentOpenings />}
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
