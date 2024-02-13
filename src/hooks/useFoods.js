import { useState, useEffect } from 'react';

import api from '../services/api';

export function useFoods() {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFoods() {
            try {
                const response = await api.get('/foods');
                setFoods(response.data);
            }
            catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false);
            }
        }
        loadFoods();
    }, []);

    return {
        foods,
        loading
    }
}