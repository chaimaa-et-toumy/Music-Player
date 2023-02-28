import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react'
import TrackPlayer, { Capability, useProgress } from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AddToFavorites } from '../Utils/AddToFavorite';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Main = ({ navigation, route }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const [dataMusic, setDataMusic] = useState([])
  const [isInFavorite, setisInFavorite] = useState(false);
  const id_ = route.params.id
  const progress = useProgress();

  const getData = async () => {
    const trackId = await TrackPlayer.getCurrentTrack();
    const trackObject = await TrackPlayer.getTrack(trackId);
    setDataMusic(trackObject);
  }

  const CheckIsInFavorite = async (id) => {
    let isInFavorite = false;
    try {
      let storage = await AsyncStorage.getItem("favorites");
      if (storage !== null) {
        storage = await JSON.parse(storage);
        storage.map((item) => {
          if (item.id === id) {
            isInFavorite = true;
          }
        });
        // console.log(isInFavorite);
        setisInFavorite(isInFavorite);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const PlaySong = async () => {
    TrackPlayer.pause()
    await TrackPlayer.skip(parseInt(id_))
    setIsPlaying(true)
    TrackPlayer.play()
  }

  useEffect(() => {
    getData();
    CheckIsInFavorite(id_);
    PlaySong();
  }, [])

  const PlayAndPause = () => {
    if (isPlaying) {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
    else {
      TrackPlayer.play();
      setIsPlaying(true);
    }
  }

  return (
    <View style={styles.container}>
      {/* nav bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Playlist')}>
          <Icon name="angle-left" size={35} color="#fff" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="music" size={25} color="#fff" style={{ marginRight: 10 }} />
          <Text style={{ color: "white", fontSize: 20 }}>Now Playing</Text>
        </View>

        <TouchableOpacity onPress={() =>
          navigation.navigate('Favorite')}>
          <Entypo name="star" size={30} color="white" />
        </TouchableOpacity>
      </View>
      {/* song content */}
      <View style={{ marginTop: "18%" }}>
        <View>
          <View style={styles.div_img}>
            <Image source={require('../assets/images/imgs.png')} style={styles.img} />
          </View>
          <Text style={styles.name_song}>{dataMusic?.name}</Text>
          <Text style={styles.singer_name}>Artiste inconnu</Text>
        </View>
        <View style={styles.player}>
          {/* slider */}
          <Slider
            style={{ marginTop: 35, width: 370, height: 40, marginHorizontal: 15 }}
            minimumValue={0}
            maximumValue={progress.duration}
            //current position of the track.
            value={progress.position}
            onValueChange={
              //a specific position in the track.
              (Value) => { TrackPlayer.seekTo(Value) }
            }
            maximumTrackTintColor="#FFF"
            thumbTintColor='rgba(115, 53, 0, 1)'
          />
          {/* music progress direction */}
          <View style={styles.progressLevelDuration}>
            <Text style={styles.progressLabelText}>{
              new Date(progress.position * 1000).toLocaleTimeString().substring(3)
            }</Text>
            <Text style={styles.progressLabelText}>{
              new Date((progress.duration - progress.position) * 1000).toLocaleTimeString().substring(3)
            }</Text>
          </View>
        </View>

        {/* music control */}
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity onPress={() => { navigation.navigate('Lyrics', { name: dataMusic?.name }) }}>
            <MaterialIcons name="queue-music" size={35} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { TrackPlayer.skipToPrevious(); getData() }}>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => PlayAndPause()}>
            <Ionicons name={isPlaying ? 'ios-pause-circle' : 'ios-play-circle'} size={75} color='rgba(229, 50, 98, 1)' />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { TrackPlayer.skipToNext(); getData() }}>
            <Ionicons name="play-skip-forward-outline" size={35} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { AddToFavorites(dataMusic) }}>
            {isInFavorite ? (
              <Icon name="heart" size={35} color='rgba(229, 50, 98, 1)' />
            ) : (
              <Icon name="heart-o" size={35} />
            )}
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  // navbar: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 19,
    marginTop: 30
  },
  img: {
    width: 230,
    height: 290,
  },
  div_img: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
    marginHorizontal: 50,
    // marginTop: 55,
  },
  name_song: {
    color: "#E6E6E6",
    fontSize: 35,
    fontWeight: 400,
    marginTop: 25,
    textAlign: 'center',
  },
  singer_name: {
    color: "#E6E6E6",
    textAlign: 'center',
    marginTop: 15,
    fontSize: 18,
  },
  progressLevelDuration: {
    width: 340,
    marginHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLabelText: {
    color: "#E6E6E6",
    fontSize: 16,
    fontWeight: 500,
    marginTop: 15,
  },
  player: {
    marginTop: 10,
  },
  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 5
  },
})