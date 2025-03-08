import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import './styles.css';

export default function BinarySearch() {
    const [debouncedNumbers, numbers, setNumbers] = useDebounce<number[]>(
        [5, 12, 18, 23, 45, 70, 89],
        500
    );
    const [debouncedTarget, target, setTarget] = useDebounce<number>(23, 500);
    const { responseData } = useAxios<string>('post', 'exercise/2', {
        numbers: debouncedNumbers,
        target: debouncedTarget,
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
