import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import './styles.css';

export default function PerfectNumbers() {
    const [number, setNumber] = useState<number>(28);
    const { responseData } = useAxios<Boolean>('post', 'exercise/3', {
        number,
    });

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title">Números Perfeitos</h1>
                    <p className="exercise-result">
                        Resultado: {responseData ? 'Verdadeiro' : 'Falso'}
                    </p>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="number">
                        Insira o número para verificar se é perfeito
                    </label>
                    <input
                        id="number"
                        className="input"
                        type="number"
                        value={number}
                        onChange={e => setNumber(parseInt(e.target.value))}
                        min={0}
                    />
                </div>
            </div>
        </div>
    );
}
