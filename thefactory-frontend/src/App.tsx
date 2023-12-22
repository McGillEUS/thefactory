import Router from "./router.tsx";
import './App.css';
import {NavBar} from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar/>
            <Router/>
        </div>
    )
}

export default App
