import {View, Text, StyleSheet} from 'react-native' 

export default function Details() {
  return (
   <View style={styles.container}>
     <Text>Tela Details</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})