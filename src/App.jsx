import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";
import ApplicationForm from "./components/Form/ApplicationForm";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Benefits from "./pages/Benefits/Benefits";
import Contact from "./pages/Contact/Contact";
import ResearchAreas from "./pages/ResearchAreas/ResearchAreas";
import Branches from "./pages/Branches/Branches";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "30px",
      }}
    >
      Redirecting...
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Scrolls to top on route change */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/departments" element={<ResearchAreas />} />
        <Route path="/branches" element={<Branches />} />
        <Route
          path="/ignithon"
          element={
            <ExternalRedirect url="https://forms.gle/4TtUTmtZHh9hzahd7" />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
