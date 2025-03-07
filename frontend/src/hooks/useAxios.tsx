import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

const baseURL = 'http://localhost:3000/';

// Custom hook to handle the API request
const useRequester = <T,>(
    method: 'get' | 'post' | 'put' | 'delete',
    endpoint: string,
    data?: any
) => {
    const [responseData, setResponseData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');
                const response: AxiosResponse<T> = await axios[method](
                    baseURL + endpoint,
                    data
                );
                setResponseData(response.data);
                setLoading(false);
            } catch (err: any) {
                setError('Failed to fetch data');
                setLoading(false);
            }
        };
        fetchData();
    }, [method, endpoint, data]);

    return { responseData, loading, error };
};

export default useRequester;
