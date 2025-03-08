import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import './styles.css';

export default function Fibonacci() {
    const [debouncedLength, length, setLength] = useDebounce<number>(6, 500);
    const { responseData } = useAxios<Number[]>('post', 'exercise/1', {
        length: debouncedLength,
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
