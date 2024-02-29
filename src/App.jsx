//pages
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import OurTeam from "@pages/OurTeam";
import OnlineBooking from "@pages/OnlineBooking";
import Services from "@pages/Services";
import Pricing from "@pages/Pricing";
import Contact from "@pages/Contact";
import PageNotFound from "@pages/404";

//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/booking" element={<OnlineBooking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<PageNotFound />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
