import {View, Text, StyleSheet} from 'react-native' 

export default function Ingredients({data}) {
 
    const {name, amount} = data;

  return (
   <View style={styles.container}>
     <Text style={styles.name}>{name}</Text>

     <Text>{amount}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4
    },
    name:{
        fontWeight: '500',
        fontSize: 16
    }
});