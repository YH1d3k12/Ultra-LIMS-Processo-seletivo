import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import ButtonGet from '../../components/buttons/buttonGet';
import { IoSearch } from 'react-icons/io5';
import Address from './share';
import './styles.css';

export default function ListAddress() {
    const navigate = useNavigate();
    const [orderBy, setOrderBy] = useState('');
    const [order, setOrder] = useState('asc');
    const { responseData } = useAxios<Address[]>('get', `address`, {
        params: {
            orderBy,
            order,
        },
    });

    const handleSearch = () => {
        navigate('/address/0');
    };

    const CelActions: React.FC<{ address: Address }> = ({ address }) => {
        let formatedCep = address.cep.replace(/\D/g, '');

        return (
            <div className="cel-actions">
                <ButtonGet path="address" entityId={formatedCep} />
            </div>
        );
    };

    return (
        <div className="page">
            <div className="exercise-container">
                <h1 className="exercise-title list-address-title">
                    Lista de Endereços ViaCEP
                    <button
                        className="buttons list-address-button-search"
                        title="procurar"
                    >
                        <IoSearch onClick={handleSearch} />
                    </button>
                </h1>
                <div className="exercise-info">
                    <div className="exercise-result">
                        {responseData ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>CEP</th>
                                        <th>UF</th>
                                        <th>Localidade</th>
                                        <th>Bairro</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responseData.map(data => (
                                        <tr key={data.cep}>
                                            <td>{data.cep}</td>
                                            <td>{data.uf}</td>
                                            <td>{data.localidade}</td>
                                            <td>{data.bairro}</td>
                                            <td>
                                                <CelActions address={data} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            'Lista Vazia'
                        )}
                    </div>
                </div>
                <div className="exercise-input-container">
                    <label htmlFor="orderBy">Ordenar Por:</label>
                    <select
                        id="orderBy"
                        className="input"
                        onChange={e => setOrderBy(e.target.value)}
                    >
                        <option value="">-</option>
                        <option value="uf">UF</option>
                        <option value="localidade">Localidade</option>
                        <option value="bairro">Bairro</option>
                    </select>
                    <select
                        id="order"
                        className="input"
                        onChange={e => setOrder(e.target.value)}
                    >
                        <option value="asc">Crescente</option>
                        <option value="desc">Decrescente</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
