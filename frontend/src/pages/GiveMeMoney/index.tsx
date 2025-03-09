import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import './styles.css';

interface Money {
    moneyType: number;
    quantity: number;
}

export default function GiveMeMoney() {
    const [debouncedMoney, money, setMoney] = useDebounce<number>(125.76, 500);
    const { responseData } = useAxios<Money[]>('post', 'exercise/5', {
        money: debouncedMoney,
    });

    const convertMoneyName = (money: number) => {
        switch (money) {
            case 100:
                return 'nota(s) de 100 reais: ';
            case 50:
                return 'nota(s) de 50 reais: ';
            case 20:
                return 'nota(s) de 20 reais: ';
            case 10:
                return 'nota(s) de 10 reais: ';
            case 5:
                return 'nota(s) de 5 reais: ';
            case 2:
                return 'nota(s) de 2 reais: ';
            case 1:
                return 'moeda(s) de 1 real: ';
            case 0.5:
                return 'moeda(s) de 50 centavos: ';
            case 0.25:
                return 'moeda(s) de 25 centavos: ';
            case 0.1:
                return 'moeda(s) de 10 centavos: ';
            case 0.05:
                return 'moeda(s) de 5 centavos: ';
            case 0.01:
                return 'moeda(s) de 1 centavo: ';
        }
    };

    return (
        <div className="page">
            <div className="exercise-container">
                <h1 className="exercise-title">Saque de Dinheiro</h1>
                <div className="exercise-info">
                    <p className="exercise-result">
                        Resultado:
                        <br />
                        {responseData?.map((money, index) => (
                            <span key={index}>
                                {convertMoneyName(money.moneyType)}
                                <strong>{money.quantity}</strong>
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="money">Altere o valor</label>
                    <input
                        id="money"
                        className="input"
                        type="number"
                        value={money}
                        onChange={e => setMoney(parseFloat(e.target.value))}
                        step={0.01}
                        min={0}
                    />
                </div>
            </div>
        </div>
    );
}
