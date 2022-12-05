import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes';
import { useAppSelector } from './hooks';
import { SignUpRoutes } from "./routes/AuthRoutes";


function App() {
    const { user, token } = useAppSelector((state) => state.auth);
    
    return (
        <div className="App">
            {user == null && token == null? 
                <>
                    <SignUpRoutes />
                </> 
                    : 
                (
                    <>
                        <Navbar />
                        <MenuRoutes />
                    </>
                )}
        </div>
    );
}

export default App;
