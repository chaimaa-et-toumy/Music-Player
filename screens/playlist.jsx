import { StyleSheet, Text, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import TrackPlayer from 'react-native-track-player';
import GetMusicFiles from '../Utils/readFile';
import onShare from '../Utils/shareSong';
import { AddToFavorites } from '../Utils/AddToFavorite';


const Playlist = ({ navigation }) => {

  const [musicF, setMusic] = useState([]);



  if (!global.OneTime) {
    TrackPlayer.setupPlayer()
    global.OneTime = true
  }


  useEffect(() => {
    try {
      GetMusicFiles().then((data) => {
        setMusic(data)
      });
    } catch (error) {
      console.log(error)
    }
  }, []);


  return (

    <View style={styles.container}>
      <ImageBackground style={{ height: '100%' }} source={require('../assets/images/imgs.png')}>
        {/* nav bar */}
        <View>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() =>
              navigation.navigate('Home')}>
              <Icon name="angle-left" size={35} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>
              navigation.navigate('Favorite')}>
              <Entypo name="star" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* song playlist */}
        <Text style={styles.Playlist}>PlayList</Text>
        <View style={{ height: '77%' }}>
          <FlatList
            data={musicF}
            renderItem={({ item }) => (
              <ScrollView>
                <View>
                  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Main', { id: item.id })}>
                    <View style={styles.fl_Directions}>
                      <Image source={require('../assets/images/imgs.png')} style={{ height: 60, width: 60, borderRadius: 10, borderColor: 'white', borderWidth: 1 }} />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ color: '#A6A4A1', fontSize: 15, fontWeight: 'bold' }}>Artiste inconnu</Text>
                      </View>
                    </View>
                    <View style={styles.fl_Directions}>
                      <TouchableOpacity onPress={() => AddToFavorites(item)}>
                        <Icon name="heart-o" size={28} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => onShare(item.id, item.name)}>
                        <Entypo name="share" size={28} color="#D6CBCB" style={{ marginLeft: 3 }} />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>

            )}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default Playlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 19,
    marginTop: 30
  },
  Playlist: {
    color: "#E2D9B3",
    fontSize: 40,
    fontWeight: 400,
    marginTop: '4%',
    fontWeight: 'bold',
    marginHorizontal: 25,
    textAlign: 'center',
    marginBottom: 20
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 13,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
  },
  fl_Directions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})