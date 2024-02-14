import { useState, useEffect } from 'react';

import api from '../services/api';

export function useFoods(params=null) {

    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFoods() {
            setLoading(true);
            
            try {
                const url = params ? `/foods?name_like=${params}` : '/foods'

                const response = await api.get(url);
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