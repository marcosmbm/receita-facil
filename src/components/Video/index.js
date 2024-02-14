import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

export default function VideoView({ onClose, videoUrl }) {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={onClose} style={styles.backButton} activeOpacity={0.8}>
                <Feather
                    name='arrow-left'
                    size={24}
                    color={'#fff'}
                />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <WebView
                style={styles.contentView}
                source={{ uri: videoUrl }}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    backButton: {
        width: '100%',
        backgroundColor: '#4cbe6c',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        padding: 14
    },
    backText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentView:{
        flex: 1,
        width: '100%'
    }
});