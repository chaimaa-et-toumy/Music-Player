import RNFS from 'react-native-fs';
import TrackPlayer from 'react-native-track-player';
// import { StyleSheet, Text, Button, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity, PermissionsAndroid, Platform, Modal } from 'react-native'



const GetMusicFiles = async () => {

    // try {
    //   if (Platform.OS === 'android') {
    //     const granted = await PermissionsAndroid.request(
    //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    //       {
    //         title: 'Permission to access external storage',
    //         message: 'This app needs access to your external storage to get music files.',
    //         buttonNeutral: 'Ask Me Later',
    //         buttonNegative: 'Cancel',
    //         buttonPositive: 'OK',
    //       },
    //     );
    //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //       const items = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Music');
  
  
    //       if (!global.onetimelast) {
    //         for (let item in items) {
    //           let Lyrics = {
    //             name: items[item]['name'].split('.')[0]
    //           }
    //           data.push(Lyrics)
    //         }
    //         global.onetimelast = true
    //         return data
    //       }
    //     } else {
    //       console.log('Storage permission denied');
    //     }
    //   } else {
    //     const musicFiles = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);
    //     return musicFiles;
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  
  
  
    // }
  
    const data = []
    const TrackPlayerData = []
    return RNFS.readDir(
      RNFS.ExternalStorageDirectoryPath + '/Music',
    ).then(contents => {
      for (let content in contents) {
        if (contents[content]['name'].endsWith('.mp3')) {
          data.push({
            id: content,
            path: contents[content]['path'],
            name: contents[content]['name'].split('.')[0],
          });
          TrackPlayerData.push({
            id: content,
            url: contents[content]['path'],
            name: contents[content]['name'].split('.')[0],
          })
        }
      }
  
      TrackPlayer.add(TrackPlayerData)
      // console.log("data", data)
      return data;
    });
  };

export default GetMusicFiles