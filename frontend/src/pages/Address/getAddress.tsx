import { useLocation, useParams, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import useDebounce from '../../hooks/useDebounce';
import { IoArrowUndoSharp } from 'react-icons/io5';
import Address from './share';
import './styles.css';

export default function GetAddress() {
    const navigate = useNavigate();
    const location = useLocation();
    const { id: entityId } = useParams();
    const id = location.state?.id || entityId;
    const [debouncedCEP, cep, setCEP] = useDebounce<string>(id, 500);
    const { responseData } = useAxios<Address>(
        'get',
        `address/${debouncedCEP}`
    );

    const handleBack = () => {
        navigate('/address');
    };

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title get-address-title">
                        Buscar Endereço ViaCEP
                        <button
                            className="buttons get-address-button-back"
                            title="retornar"
                        >
                            <IoArrowUndoSharp onClick={handleBack} />
                        </button>
                    </h1>
                    <div className="exercise-result">
                        {responseData?.cep ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th colSpan={2}></th>
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
                        type="text"
                        value={cep}
                        onChange={e => setCEP(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
