import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import Fibonacci from '../pages/Fibonacci';
import BinarySearch from '../pages/BinarySearch';
import PerfectNumbers from '../pages/PerfectNumbers';
import GiveMeMoney from '../pages/GiveMeMoney';
import ListAddress from '../pages/Address/listAddress';
import GetAddress from '../pages/Address/getAddress';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="exercise/1" element={<Fibonacci />} />
                    <Route path="exercise/2" element={<BinarySearch />} />
                    <Route path="exercise/3" element={<PerfectNumbers />} />
                    <Route path="exercise/5" element={<GiveMeMoney />} />
                    <Route path="address" element={<ListAddress />} />
                    <Route path="address/:cep" element={<GetAddress />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
