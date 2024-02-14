import { Image, StyleSheet } from 'react-native';

export default function Banner({source}) {
    return (
        <Image
            source={source}
            style={styles.cover}
        />
    );
}

const radius = 14;

const styles = StyleSheet.create({
    cover: {
        width: '100%',
        height: 200,
        borderRadius: radius
    },
})