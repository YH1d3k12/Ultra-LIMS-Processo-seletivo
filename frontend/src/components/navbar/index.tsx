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
                        <Link to="/exercise/2">Busca Binária</Link>
                    </li>
                    <li>
                        <Link to="/exercise/3">Números Perfeitos</Link>
                    </li>
                    <li>
                        <Link to="/4">Desafio IV</Link>
                    </li>
                    <li>
                        <Link to="/exercise/5">Saque de Dinheiro</Link>
                    </li>
                    <li>
                        <Link to="/6">Via Cep</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
