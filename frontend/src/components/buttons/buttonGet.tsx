import { useNavigate } from 'react-router-dom';
import { IoEye } from 'react-icons/io5';
import './styles.css';

interface ButtonGetProps {
    path: string;
    entityId: number | string;
    params?: Record<string, unknown>;
}

export default function ButtonGet({ path, entityId, params }: ButtonGetProps) {
    const navigate = useNavigate();

    const handleGet = () => {
        navigate(`/${path}/${entityId}`, {
            state: { id: entityId, ...params },
        });
    };

    return (
        <button className="buttons button-get" onClick={handleGet}>
            <IoEye title="Visualizar" />
        </button>
    );
}
