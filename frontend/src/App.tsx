import Router from "./router";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useState } from "react";
import NavDrawer from "./components/NavDrawer";
import { Toaster } from "react-hot-toast";
import { LoginContext } from "./Contexts/LoginContext";


function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <LoginContext.Provider value={{ isLoggedIn, setLoggedIn }}>
          <NavBar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
          <NavDrawer toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
          <Router />
        </LoginContext.Provider>
        <Toaster />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
