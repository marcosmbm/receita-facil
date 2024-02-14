import { useState, useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useStorage } from '../../hooks/useStorage';

import { StyleSheet, Pressable, ScrollView, View, Text, Modal, Share } from 'react-native'
import { Entypo, AntDesign, Feather } from '@expo/vector-icons';

import Banner from '../../components/Banner';
import Ingredients from '../../components/Ingredients';
import Instructions from '../../components/Instructions';
import VideoView from '../../components/Video';

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const {isFavorite, saveFavorites, removeFavorite} = useStorage('@foods');

  const data = route.params?.data;

  const [showVideo, setShowVideo] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    async function getStatusFavorites(){
      const recipeFavorite = await isFavorite(route.params?.data);
      setFavorite(recipeFavorite);
    }

    getStatusFavorites();

    navigation.setOptions({
      title: route.params?.data ? route.params?.data.name : 'Detalhes da receita',
      headerRight: () => (
        <Pressable
          onPress={() => handleFavoriteReceipe(route.params?.data)}
        >
          <Entypo
            name={favorite ? 'heart' : 'heart-outlined'}
            size={28}
            color={'#ff4141'}
          />
        </Pressable>
      )
    });
  }, [navigation, route.params?.data, favorite]);

  async function handleFavoriteReceipe(receipe){
    if(favorite){
      await removeFavorite(receipe.id);
      setFavorite(false);
      return
    }

    await saveFavorites(receipe);
    setFavorite(true);
  }

  async function shareRecipe(){
    try {
      await Share.share({
        url: `${data?.video}`,
        message: `Receita: ${data?.name} ${data?.video}`
      })
    } 
    catch (error) {
      alert('Não foi possível compartilhar a receita!')  
    }
  }

  function handleOpenVideo(){
    setShowVideo(true);
  }


  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{paddingBottom: 14}}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={handleOpenVideo}>
        <View style={styles.playIcon}>
          <AntDesign
            name='playcircleo'
            size={44}
            color={'#fff'}
          />
        </View>

        <Banner
          source={{ uri: data?.cover }}
        />
      </Pressable>

      <View style={styles.headerDetails}>
          <View>
            <Text style={styles.title}>{data?.name}</Text>
            <Text style={styles.ingredientsText}>ingredientes ({data?.total_ingredients})</Text>
          </View>

          <Pressable onPress={shareRecipe}>
            <Feather
              name='share-2'
              size={24}
              color={'#121212'}
            />
          </Pressable>
      </View>

      {
        data?.ingredients && data?.ingredients.map((item) => (
          <Ingredients
            key={item.id}
            data={item}
          />
        ))
      }

      <View style={styles.instructionArea}>
        <Text style={styles.instructionText}>
          Modo de preparo
        </Text>

        <Feather
          name='arrow-down'
          size={24}
          color={'#fff'}
        />
      </View>

      {
        data?.instructions && data?.instructions.map((item) => (
          <Instructions
            key={item.id}
            data={item}
          />
        ))
      }

      <Modal visible={showVideo} animationType='slide'>
        <VideoView
          onClose={() => setShowVideo(false)}
          videoUrl={data?.video}
        />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    paddingHorizontal: 14,
    paddingVertical: 14
  },
  playIcon:{
    position: 'absolute',
    zIndex: 9,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerDetails:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14
  },
  title:{
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#000'
  },
  ingredientsText:{
    fontSize: 18
  },
  instructionArea:{
    width: '100%',
    backgroundColor: '#4cbe6c',
    flexDirection: 'row',
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
    alignItems: 'center',
    gap: 8
  },
  instructionText:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})