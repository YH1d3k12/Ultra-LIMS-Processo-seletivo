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
                        {responseData ? (
                            <>
                                <p>CEP: {responseData.cep}</p>
                                <p>Logradouro: {responseData.logradouro}</p>
                                <p>Complemento: {responseData.complemento}</p>
                                <p>Unidade: {responseData.unidade}</p>
                                <p>Bairro: {responseData.bairro}</p>
                                <p>Localidade: {responseData.localidade}</p>
                                <p>UF: {responseData.uf}</p>
                                <p>Estado: {responseData.estado}</p>
                                <p>Região: {responseData.regiao}</p>
                                <p>IBGE: {responseData.ibge}</p>
                                <p>GIA: {responseData.gia}</p>
                                <p>DDD: {responseData.ddd}</p>
                            </>
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
