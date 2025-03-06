import { Outlet } from 'react-router-dom';
import NavBar from '../navbar';
import './styles.css';

export default function Layout() {
    return (
        <div className="layout">
            <NavBar />
            <Outlet />
        </div>
    );
}
