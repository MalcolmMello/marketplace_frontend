import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes'
import { fetchCategories } from './redux/sliceCategories';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { getPerfilData } from "./redux/slicePerfil";


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(getPerfilData());
    }, [dispatch]);
    
    return (
        <div className="App">
            <Navbar />
            <MenuRoutes />
        </div>
    );
}

export default App;
