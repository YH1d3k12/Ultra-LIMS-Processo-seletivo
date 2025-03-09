import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import './styles.css';

export default function PerfectNumbers() {
    const [debouncedNumber, number, setNumber] = useDebounce<number>(28, 500);

    const { responseData } = useAxios<Boolean>('post', 'exercise/3', {
        number: debouncedNumber,
    });

    return (
        <div className="page">
            <div className="exercise-container">
                <h1 className="exercise-title">Números Perfeitos</h1>
                <div className="exercise-info">
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
