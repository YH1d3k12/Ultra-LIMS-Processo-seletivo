import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import './styles.css';

export default function Fibonacci() {
    const [length, setLength] = useState<number>(6);
    const { responseData } = useAxios<Number[]>('post', 'exercise/1', {
        length,
    });

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title">Sequência de Fibonacci</h1>
                    <p className="exercise-result">
                        Resultado: {responseData?.join(', ')}
                    </p>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="length">
                        Altere o tamanho da sequência
                    </label>
                    <input
                        id="length"
                        className="input"
                        type="number"
                        value={length}
                        onChange={e => setLength(parseInt(e.target.value))}
                        min={0}
                    />
                </div>
            </div>
        </div>
    );
}
