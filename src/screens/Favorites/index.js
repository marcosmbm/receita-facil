import {View, Text, StyleSheet} from 'react-native' 

export default function Favorites() {
  return (
   <View style={styles.container}>
     <Text>Tela Favorites</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})