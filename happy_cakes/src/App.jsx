import "./App.css";
import Navigation from "./components/Navigation";
import Contact from "./views/Contact";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
