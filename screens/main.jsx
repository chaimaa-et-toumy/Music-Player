import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React from 'react'

const Setting = ({ navigation }) => {
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

        <Entypo name="dots-three-horizontal" size={30} color="#fff" />
      </View>
      {/* song content */}
      <View style={{marginTop: "18%"}}>
        <View>
          <View style={styles.div_img}>
            <Image source={require('../assets/images/imgs.png')} style={styles.img} />
          </View>
          <Text style={styles.name_song}>Soul and Mina</Text>
          <Text style={styles.singer_name}>CHKO HIBSON</Text>
        </View>
        <View style={styles.player}>
          {/* slider */}
          <Slider
            style={{ marginTop: 35, width: 370, height: 40, marginHorizontal: 15 }}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor='rgba(229, 50, 98, 1)'
            maximumTrackTintColor="#FFF"
            thumbTintColor='rgba(115, 53, 0, 1)'
          />
          {/* music progress direction */}
          <View style={styles.progressLevelDuration}>
            <Text style={styles.progressLabelText}>00:00</Text>
            <Text style={styles.progressLabelText}>00:00</Text>
          </View>
        </View>

        {/* music control */}
        <View style={styles.musicControlsContainer}>
          <TouchableOpacity>
            <Ionicons name="repeat" size={35} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="play-skip-back-outline" size={35} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name='ios-pause-circle' size={75} color='rgba(229, 50, 98, 1)' />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="play-skip-forward-outline" size={35} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Favorite')}>
            <Ionicons name="heart" size={35} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Setting

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