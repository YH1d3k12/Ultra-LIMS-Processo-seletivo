import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import './styles.css';

interface CEP {
    cep: string;
    logradouro: string;
    complemento: string;
    unidade: string;
    bairro: string;
    localidade: string;
    uf: string;
    estado: string;
    regiao: string;
    ibge: string;
    gia: string;
    ddd: string;
}

export default function GetCEP() {
    const [debouncedCEP, cep, setCEP] = useDebounce<number>(89216284, 500);
    const { responseData } = useAxios<CEP>('get', `cep/${debouncedCEP}`);

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title">Busca CEP</h1>
                    <div className="exercise-result">
                        {responseData?.cep ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={2}>Informações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>CEP</td>
                                        <td>{responseData.cep}</td>
                                    </tr>
                                    <tr>
                                        <td>Logradouro</td>
                                        <td>{responseData.logradouro}</td>
                                    </tr>
                                    <tr>
                                        <td>Complemento</td>
                                        <td>{responseData.complemento}</td>
                                    </tr>
                                    <tr>
                                        <td>Unidade</td>
                                        <td>{responseData.unidade}</td>
                                    </tr>
                                    <tr>
                                        <td>Bairro</td>
                                        <td>{responseData.bairro}</td>
                                    </tr>
                                    <tr>
                                        <td>Localidade</td>
                                        <td>{responseData.localidade}</td>
                                    </tr>
                                    <tr>
                                        <td>UF</td>
                                        <td>{responseData.uf}</td>
                                    </tr>
                                    <tr>
                                        <td>Estado</td>
                                        <td>{responseData.estado}</td>
                                    </tr>
                                    <tr>
                                        <td>Região</td>
                                        <td>{responseData.regiao}</td>
                                    </tr>
                                    <tr>
                                        <td>IBGE</td>
                                        <td>{responseData.ibge}</td>
                                    </tr>
                                    <tr>
                                        <td>GIA</td>
                                        <td>{responseData.gia}</td>
                                    </tr>
                                    <tr>
                                        <td>DDD</td>
                                        <td>{responseData.ddd}</td>
                                    </tr>
                                </tbody>
                            </table>
                        ) : (
                            'CEP não encontrado'
                        )}
                    </div>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="cep">CEP</label>
                    <input
                        id="cep"
                        className="input"
                        type="number"
                        value={cep}
                        onChange={e => setCEP(parseInt(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
}
