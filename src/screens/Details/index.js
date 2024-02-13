import { useLayoutEffect } from 'react';
import { useRoute, useNavigation} from '@react-navigation/native';

import {View, Text, StyleSheet, Pressable} from 'react-native' 
import {Entypo} from '@expo/vector-icons';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da receita',
      headerRight: () => (
        <Pressable>
          <Entypo
            name='heart'
            size={28}
            color={'#ff4141'}
          />
        </Pressable>
      )
    });
  }, [navigation, route.params?.data]);

  return (
   <View style={styles.container}>
     <Text>Tela Details</Text>

     <Text>{route.params?.data.name}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})