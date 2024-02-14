import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export function useStorage(key){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function getFavorites(){
        setLoading(true);
        console.log('oi')
        
        const favoritesStorage = await AsyncStorage.getItem(key);
        const favorites = JSON.parse(favoritesStorage) || [];
        
        setLoading(false);
        setData(favorites)
        
        return favorites;
    }

    async function saveFavorites(receipe){
        const myFavorites = await getFavorites();

        let hasItem = myFavorites.some((item) => item.id === receipe.id);

        if(hasItem){
            return
        }
        myFavorites.push(receipe);

        await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
        setData(myFavorites);
    }

    async function removeFavorite(id){
        const myFavorites = await getFavorites();
        
        const favoritesFiltered = myFavorites.filter((item) => item.id !== id);
        await AsyncStorage.setItem(key, JSON.stringify(favoritesFiltered));
        setData(favoritesFiltered);
    }

    async function isFavorite(receipe){
        const myFavorites = await getFavorites();

        const receipeFind = myFavorites.find((item) => item.id === receipe.id);

        if(receipeFind) {
            return true
        }

        return false
    }
    
    return {
        data,
        loading,
        getFavorites,
        saveFavorites,
        removeFavorite,
        isFavorite
    }
}