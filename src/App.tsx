import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes'

function App() {
    return (
        <div className="App">
            <Navbar />
            <MenuRoutes />
        </div>
    );
}

export default App;
