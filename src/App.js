import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar";
import Layout from "./Layout";
import "./Styles/component.css";
import "./Styles/helper.css";
import "./Styles/layout.css";
import "./Styles/component.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import ScrollToTop from 'react-router-scroll-top';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import AppCostCalculator from "./Pages/AppCostCalculator";
import Register from "./Pages/Register";
import Form from "./Pages/chk_for";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Solutions from "./Pages/Solutions";
import SolutionDetails from "./Pages/Solutions/SolutionDetails";
import Technologies from "./Pages/Technologies";
import TechnologyDetails from "./Pages/Technologies/TechnologyDetails";
import Location from "./Pages/About";
// import About from "./Pages/Insights/about";
import LocationDetail from "./Pages/About/AboutDetail";
import InsightsDetails from "./Pages/Insights/insightsDetails";
import Payment from "./Pages/Insights/payment";
import Life from "./Pages/Insights/life";
import Press from "./Pages/Insights/press";
import Careers from "./Pages/Insights/career";
import Podcast from "./Pages/Insights/podcast";
import Events from "./Pages/Insights/events";
import ReferralProgram from "./Pages/Insights/ReferralProgram";
import Contact from "./Pages/Contact";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/Technologies" element={<Technologies />} />
        <Route path="/About" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />

        <Route path="/:servicename" element={<ServiceDetails />} />
        <Route path="/:solutionname" element={<SolutionDetails />} />
        <Route path="/:technologyname" element={<TechnologyDetails />} />
        <Route path="/:insightname" element={<InsightsDetails />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/life" element={<Life />} />
        <Route path="/press" element={<Press />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/events" element={<Events />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
        <Route path="/app-cost-calculator" element={<AppCostCalculator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/location" element={<Location />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chk" element={<Form />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
