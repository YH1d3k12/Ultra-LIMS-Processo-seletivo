import { Link } from 'react-router-dom';
import './styles.css';

export default function NavBar() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/exercise/1">Fibonacci</Link>
                    </li>
                    <li>
                        <Link to="/2">Desafio II</Link>
                    </li>
                    <li>
                        <Link to="/3">Desafio III</Link>
                    </li>
                    <li>
                        <Link to="/4">Desafio IV</Link>
                    </li>
                    <li>
                        <Link to="/5">Desafio V</Link>
                    </li>
                    <li>
                        <Link to="/6">Via Cep</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
