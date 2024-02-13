import { View, Text, StyleSheet } from "react-native";

export default function Logo(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Receita Fácil</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4CBE6C',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 32,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        marginBottom: 8
    },
    title:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});