import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Fibonacci from '../pages/Fibonacci';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="exercise/1" element={<Fibonacci />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
