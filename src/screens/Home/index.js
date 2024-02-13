import { useState } from 'react';
import { useFoods } from '../../hooks/useFoods';

import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Logo from '../../components/Logo';
import FoodItem from '../../components/FoodItem';
import Loader from '../../components/Loader';

export default function Home() {
  const { foods, loading } = useFoods();

  const [inputSearch, setInputSearch] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Logo />

      <Text style={styles.title}>Encontre a receita</Text>
      <Text style={styles.title}>que combina com você</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Digite o nome da comida...'
          style={styles.input}
          value={inputSearch}
          onChangeText={(value) => setInputSearch(value)}
        />

        <TouchableOpacity
          activeOpacity={0.8}
        >
          <Ionicons
            name='search'
            size={28}
            color={'#46BD6A'}
          />
        </TouchableOpacity>
      </View>

      {
        loading ? (
          <Loader />
        )
        :
        (
          <FlatList
            data={foods}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FoodItem data={item} />}
            showsVerticalScrollIndicator={false}
          />
        )
      }
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