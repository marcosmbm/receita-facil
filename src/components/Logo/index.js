import { Text, StyleSheet } from "react-native";
import { View as MotiView } from 'moti';

export default function Logo() {
    return (
        <MotiView
            style={styles.container}
            from={{
                opacity: 0,
                translateX: -50
            }}
            animate={{
                opacity: 1,
                translateX: 0
            }}
            transition={{
                delay: 100,
                type: 'timing',
                duration: 650
            }}
        >
            <Text style={styles.title}>Receita Fácil</Text>
        </MotiView>
    )
}

const styles = StyleSheet.create({
    container: {
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
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});