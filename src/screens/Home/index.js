import { useState } from 'react';
import { useFoods } from '../../hooks/useFoods';
import { useNavigation } from '@react-navigation/native';

import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Text as MotiText} from 'moti';

import Logo from '../../components/Logo';
import ListFoods from '../../components/ListFoods';

export default function Home() {
  const { foods, loading } = useFoods();

  const navitagion = useNavigation();

  const [inputSearch, setInputSearch] = useState('');

  function handleSearch(){
    const search = inputSearch.trim();

    if(search === '') return;

    navitagion.navigate('Search', {
      name: search
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <MotiText 
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: 'timing',
          duration: 650
        }}
      >
        Encontre a receita
      </MotiText>
      
      <MotiText 
        style={styles.title}
        from={{
          opacity: 0,
          translateY: 15
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          delay: 100,
          type: 'timing',
          duration: 650
        }}
      >
        que combina com você
      </MotiText>

      <View style={styles.form}>
        <TextInput
          placeholder='Digite o nome da comida...'
          style={styles.input}
          value={inputSearch}
          onChangeText={(value) => setInputSearch(value)}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSearch}
        >
          <Ionicons
            name='search'
            size={28}
            color={'#46BD6A'}
          />
        </TouchableOpacity>
      </View>

      <ListFoods
        foods={foods}
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
    color: '#0e0e0e'
  },
  form: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    paddingHorizontal: 8,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 14
  }
})