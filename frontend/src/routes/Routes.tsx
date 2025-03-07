import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import TestPage from '../pages/TestPage';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="exercise/1" element={<TestPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
