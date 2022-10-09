import { Navbar } from "./components/Navbar/Navbar";
import { MenuRoutes } from './routes/MenuRoutes'
import { fetchCategories } from './redux/sliceCategories';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';


function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    
    return (
        <div className="App">
            <Navbar />
            <MenuRoutes />
        </div>
    );
}

export default App;
