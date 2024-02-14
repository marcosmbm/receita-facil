import { useRoute } from '@react-navigation/native';
import { useFoods } from '../../hooks/useFoods';

import {View, StyleSheet} from 'react-native'

import ListFoods from '../../components/ListFoods';

export default function Search() {
  const route = useRoute();
  const search = route.params?.name;

  const {foods, loading} = useFoods(search);

  return (
   <View style={styles.container}>
      <ListFoods
        loading={loading}
        foods={foods}
      />
   </View>
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
  info:{
    fontSize: 16
  }
})