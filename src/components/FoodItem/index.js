import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

export default function FoodItem({ data }) {
    const navigation = useNavigation();

    function handleNavigate(){
        navigation.navigate('Details', {data});
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleNavigate}
        >
            <View style={styles.container}>
                <Image
                    source={{ uri: data.cover }}
                    style={styles.cover}
                />

                <View style={styles.info}>
                    <Text style={styles.name}>{data.name}</Text>
                    
                    <Text style={styles.description}>
                        {data.total_ingredients} ingredientes | {data.time} min
                    </Text>
                </View>

                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.9)']}
                    style={styles.gradient}
                />
            </View>
        </TouchableOpacity>
    );
}

const infoPosition = 14;
const radius = 14;

const styles = StyleSheet.create({
    container: {
        marginBottom: 14
    },
    cover: {
        width: '100%',
        height: 200,
        borderRadius: radius
    },
    info:{
        position: 'absolute',
        bottom: infoPosition,
        left: infoPosition,
        zIndex: 99
    },
    name:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    description:{
        color: '#fff'
    },
    gradient:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '55%',
        borderRadius: radius,
        zIndex: 1
    }
})