import { useEffect } from 'react';
import { useStorage } from '../../hooks/useStorage';
import { useIsFocused } from '@react-navigation/native';

import {Text, StyleSheet, SafeAreaView} from 'react-native';

import ListFoods from '../../components/ListFoods';

export default function Favorites() {

  const {data, loading, getFavorites} = useStorage('@foods');
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function load(){
      if(isActive) await getFavorites();
    }
    
    if(isActive) load()

    return () => {
      isActive = false;
    }
  }, [isFocused]);

  return (
   <SafeAreaView style={styles.container}>
     <Text style={styles.title}>Receitas Favoritas</Text>

     {
      data && data.length === 0 && (
        <Text>Você ainda não tem nenhuma lista salva.</Text>
      )
     }

     <ListFoods
      foods={data}
      loading={loading}
     />
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14,
    backgroundColor: '#F3F9FF'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0e0e0e',
    marginBottom: 14
  }
})