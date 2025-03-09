import useDebounce from '../../hooks/useDebounce';
import './styles.css';

export default function PalindromicSubstring() {
    const [debouncedSentence, sentence, setSentence] = useDebounce<string>(
        'babad',
        500
    );
    return (
        <div className="page">
            <div className="exercise-container">
                <h1 className="exercise-title">
                    Substring Palindrômica Mais Longa
                </h1>
                <div className="exercise-info">
                    <p className="exercise-result">Resultado:</p>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="sentence">Frase</label>
                    <input
                        id="sentence"
                        className="input"
                        type="text"
                        value={sentence}
                        onChange={e => setSentence(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
