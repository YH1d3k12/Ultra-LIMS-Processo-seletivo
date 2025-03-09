import useAxios from '../../hooks/useAxios';
import Address from './share';
import './styles.css';

export default function ListAddress() {
    const { responseData } = useAxios<Address[]>('get', `address`);
    console.log(responseData);

    return (
        <div className="page">
            <div className="exercise-container">
                <div className="exercise-info">
                    <h1 className="exercise-title">
                        Lista de Endereços ViaCEP
                    </h1>
                    <div className="exercise-result">
                        {responseData ? (
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>CEP</th>
                                        <th>UF</th>
                                        <th>Localidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {responseData.map(data => (
                                        <tr key={data.cep}>
                                            <td>{data.cep}</td>
                                            <td>{data.uf}</td>
                                            <td>{data.localidade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            'Lista Vazia'
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
