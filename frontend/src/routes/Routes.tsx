import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Fibonacci from '../pages/Fibonacci';
import BinarySearch from '../pages/BinarySearch';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="exercise/1" element={<Fibonacci />} />
                    <Route path="exercise/2" element={<BinarySearch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
