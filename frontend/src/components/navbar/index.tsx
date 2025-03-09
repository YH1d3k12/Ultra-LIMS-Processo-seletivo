import { Link } from 'react-router-dom';
import { IoHome } from 'react-icons/io5';
import './styles.css';

export default function NavBar() {
    return (
        <header className="header">
            <Link to="/" className="header-icon">
                <IoHome />
            </Link>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/exercise/1">Fibonacci</Link>
                    </li>
                    <li>
                        <Link to="/exercise/2">Busca Binária</Link>
                    </li>
                    <li>
                        <Link to="/exercise/3">Números Perfeitos</Link>
                    </li>
                    <li>
                        <Link to="exercise/4">Substring Palindrômica</Link>
                    </li>
                    <li>
                        <Link to="/exercise/5">Saque de Dinheiro</Link>
                    </li>
                    <li>
                        <Link to="/address">ViaCEP</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
