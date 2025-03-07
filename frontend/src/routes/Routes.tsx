import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
