import Router from "./router"
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
      <NavBar />
      <Router />
      <Footer/>
    </BrowserRouter>
        </>
    )
}

export default App