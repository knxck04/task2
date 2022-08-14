import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import Manga from "./Manga";

const RouteSwitch = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Manga" element={<Manga />} />
      </Routes>
    </Router>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default RouteSwitch;