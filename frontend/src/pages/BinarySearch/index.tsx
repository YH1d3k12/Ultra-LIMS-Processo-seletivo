import { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import './styles.css';

export default function BinarySearch() {
    const [numbers, setNumbers] = useState<number[]>([
        5, 12, 18, 23, 45, 70, 89,
    ]);
    const [target, setTarget] = useState<number>(23);
    const { responseData } = useAxios<string>('post', 'exercise/2', {
        numbers,
        target,
    });

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title">
                        Algoritmo de Busca Binária
                    </h1>
                    <p className="exercise-result">
                        Resultado: {responseData}° indice da lista
                    </p>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="numbers">
                        Array de números (por hora readOnly)
                    </label>
                    <input
                        id="numbers"
                        className="input"
                        type="string"
                        value={numbers.join(', ')}
                        min={0}
                        readOnly
                    />
                    <label htmlFor="target">Número Alvo</label>
                    <input
                        id="target"
                        className="input"
                        type="number"
                        value={target}
                        onChange={e => setTarget(parseInt(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}
