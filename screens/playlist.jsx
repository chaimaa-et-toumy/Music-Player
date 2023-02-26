import { StyleSheet, Text, Button, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import RNFS from 'react-native-fs';
import TrackPlayer, { Capability } from 'react-native-track-player';
import GetMusicFiles from '../components/readFile';
import onShare from '../components/shareSong';
import { AddToFavorites } from '../components/AddToFavorite';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const getMusicFiles = async () => {

//   // try {
//   //   if (Platform.OS === 'android') {
//   //     const granted = await PermissionsAndroid.request(
//   //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//   //       {
//   //         title: 'Permission to access external storage',
//   //         message: 'This app needs access to your external storage to get music files.',
//   //         buttonNeutral: 'Ask Me Later',
//   //         buttonNegative: 'Cancel',
//   //         buttonPositive: 'OK',
//   //       },
//   //     );
//   //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//   //       const items = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Music');


//   //       if (!global.onetimelast) {
//   //         for (let item in items) {
//   //           let Lyrics = {
//   //             name: items[item]['name'].split('.')[0]
//   //           }
//   //           data.push(Lyrics)
//   //         }
//   //         global.onetimelast = true
//   //         return data
//   //       }
//   //     } else {
//   //       console.log('Storage permission denied');
//   //     }
//   //   } else {
//   //     const musicFiles = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);
//   //     return musicFiles;
//   //   }
//   // } catch (error) {
//   //   console.log(error.message);
//   // }



//   // }

//   const data = []
//   const TrackPlayerData = []
//   return RNFS.readDir(
//     RNFS.ExternalStorageDirectoryPath + '/Music',
//   ).then(contents => {
//     for (let content in contents) {
//       if (contents[content]['name'].endsWith('.mp3')) {
//         data.push({
//           id: content,
//           path: contents[content]['path'],
//           name: contents[content]['name'].split('.')[0],
//         });
//         TrackPlayerData.push({
//           id: content,
//           url: contents[content]['path'],
//           name: contents[content]['name'].split('.')[0],
//         })
//       }
//     }

//     TrackPlayer.add(TrackPlayerData)
//     // console.log("data", data)
//     return data;
//   });
// };



const Playlist = ({ navigation }) => {

  const [musicF, setMusic] = useState([]);
  const [isInFavorite, setisInFavorite] = useState(false);



  if (!global.OneTime) {
    TrackPlayer.setupPlayer()
    global.OneTime = true
  }


  const PlaySong = async (id) => {
    TrackPlayer.pause()
    await TrackPlayer.skip(parseInt(id))
     TrackPlayer.updateOptions({
      stopWithApp: false,
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    })
    // TrackPlayer.play()
    navigation.navigate('Main', { id: id })
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
                  <TouchableOpacity style={styles.card} onPress={() => { PlaySong(item.id); }}>
                    <View style={styles.fl_Directions}>
                      <Image source={require('../assets/images/imgs.png')} style={{ height: 60, width: 60, borderRadius: 10, borderColor: 'white', borderWidth: 1 }} />
                      <View style={{ marginLeft: 15 }}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>{item.name}</Text>
                        <Text style={{ color: '#A6A4A1', fontSize: 15, fontWeight: 'bold' }}>Artiste inconnu</Text>
                      </View>
                    </View>
                    <View style={styles.fl_Directions}>
                      <TouchableOpacity onPress={() => AddToFavorites(item)}>
                        {/* <Icon name="heart-o" size={28} /> */}
                        {isInFavorite ? (
                          <Icon name="heart" size={28} color='rgba(229, 50, 98, 1)' />
                        ) : (
                          <Icon name="heart-o" size={28} />
                        )}
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

// export { Playlist, getMusicFiles };



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