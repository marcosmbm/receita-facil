import { View, Text, StyleSheet } from 'react-native'

export default function Instructions({ data }) {

    const { id, text } = data;

    return (
        <View style={styles.container}>
            <Text style={styles.pos}>{id}- </Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 8,
        marginBottom: 14
    },
    pos: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        lineHeight: 20
    }
})