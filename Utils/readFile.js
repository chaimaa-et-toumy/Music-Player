import { PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import TrackPlayer from 'react-native-track-player';

const getMusicFiles = async () => {

  const data = []
  const TrackPlayerData = []
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission to access external storage',
          message: 'This app needs access to your external storage to get music files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
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
      }
      else {
        console.log('Storage permission denied');
      }
    }
    else {
      const musicFiles = await RNFS.readDir(RNFS.ExternalStorageDirectoryPath);
      return musicFiles;
    }

  } catch (error) {
    console.log(error.message)
  }

};

export default getMusicFiles