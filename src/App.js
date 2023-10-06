import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import "./Styles/component.css";
import "./Styles/helper.css";
import "./Styles/layout.css";
// import ScrollToTop from 'react-router-scroll-top';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Location from "./Pages/About";
import AppCostCalculator from "./Pages/AppCostCalculator";
import Register from "./Pages/Register";
import ServiceDetails from "./Pages/Services/ServiceDetails";
import Solutions from "./Pages/Solutions";
import SolutionDetails from "./Pages/Solutions/SolutionDetails";
import Technologies from "./Pages/Technologies";
import TechnologyDetails from "./Pages/Technologies/TechnologyDetails";
// import About from "./Pages/Insights/about";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ReferralProgram from "./Pages/Insights/ReferralProgram";
import Careers from "./Pages/Insights/career";
import Events from "./Pages/Insights/events";
import InsightsDetails from "./Pages/Insights/insightsDetails";
import Life from "./Pages/Insights/life";
import Payment from "./Pages/Insights/payment";
import Podcast from "./Pages/Insights/podcast";
import Press from "./Pages/Insights/press";
import Portfolio from "./Pages/Portfolio";

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
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
