import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes'
import { fetchCategories } from './redux/sliceCategories';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { getAddress, getPerfilData } from "./redux/slicePerfil";
import { SignUp } from "./pages/SignUp/SignUp";
import { SignUpRoutes } from "./routes/SignUpRoutes";


function App() {
    const user = JSON.parse(String(localStorage.getItem('profile')));
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(getPerfilData());
        dispatch(getAddress());
    }, [dispatch]);
    
    return (
        <div className="App">
            {!user ? 
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
