import Router from "./router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import NavDrawer from "./components/NavDrawer";

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar toggleDrawer={toggleDrawer} />
        <NavDrawer toggleDrawer={toggleDrawer} isOpen={isDrawerOpen} />
        <Router />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
