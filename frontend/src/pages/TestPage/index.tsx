import useAxios from '../../hooks/useAxios';

export default function TestPage() {
    const { responseData, loading, error } = useAxios<string>(
        'get',
        'exercise/5'
    );

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return <h1>{responseData}</h1>;
}
