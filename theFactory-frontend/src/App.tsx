import Router from "./router.tsx";
import {NavBar} from "./components/NavBar";
import {Footer} from "./components/Footer";
import './App.css';
import {GlobalStateProvider} from "./state/GlobalState.tsx";

function App() {
    return (
        <GlobalStateProvider>
            <NavBar/>
            <Router/>
            <Footer/>
        </GlobalStateProvider>
    )
}

export default App
