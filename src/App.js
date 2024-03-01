import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Preloader from "./layout/Preloader";
import RodiPrograms from "./ui/RodiPrograms";
import Announcement from "./ui/Announcement";
import Impact from "./ui/Impact";
const Home = lazy(() => import("./ui/Home"));
const Career = lazy(() => import("./ui/Career"));
const Contact = lazy(() => import("./ui/Contact"));
const About = lazy(() => import("./ui/About"));
const Service = lazy(() => import("./ui/Service"));
const NoPage = lazy(() => import("./layout/NoPage"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} />
            <Route path="careers" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="programs" element={<RodiPrograms />} />
            <Route path="announcement" element={<Announcement />} />
            <Route path="impact" element={<Impact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
