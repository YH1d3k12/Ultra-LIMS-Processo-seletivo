import { useNavigate } from 'react-router-dom';
import { IoEye } from 'react-icons/io5';
import './styles.css';

interface ButtonGetProps {
    path: string;
    entityId: number;
    handleOperation?: (id: number) => void;
    params?: Record<string, unknown>;
}

export default function ButtonGet({
    path,
    entityId,
    handleOperation,
    params,
}: ButtonGetProps) {
    const navigate = useNavigate();

    const handleGet = () => {
        if (handleOperation) {
            handleOperation(entityId);
        }
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
