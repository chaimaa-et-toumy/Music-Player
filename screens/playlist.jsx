import { StyleSheet, Text, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const fakeData = [
  {
    id: 1,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 2,
    name: 'Faded',
    singer: 'Alan Walker',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 3,
    name: 'Ya Habibi',
    singer: 'Mohamed Hamaki',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 4,
    name: 'akhir el 3omr',
    singer: 'Tamer Hosny',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 11,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 5,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 6,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 7,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 8,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 9,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 10,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
]

const Playlist = ({ navigation }) => {
  return (

    <ImageBackground style={styles.container} source={require('../assets/images/imgs.png')}>
      {/* nav bar */}
      {/* <View style={styles.main}> */}
      <View>
        <View style={styles.navbar}>
          <TouchableOpacity onPress={() =>
            navigation.navigate('Home')}>
            <Icon name="angle-left" size={35} color="white" />
            {/* <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Back</Text> */}
          </TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={30} color="white" />
        </View>
      </View>

      {/* song playlist */}
      <View>
        <Text style={styles.Playlist}>PlayList</Text>
        <FlatList
          data={fakeData}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            width: '100%',
            marginTop: 25
          }}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Main')}>
              <View style={styles.fl_Directions}>
                <Image source={item.img} style={{ height: 60, width: 60, borderRadius: 10, borderColor: 'white', borderWidth: 1 }} />
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                  <Text style={{ color: '#A6A4A1', fontSize: 15, fontWeight: 'bold' }}>{item.singer}</Text>
                </View>
              </View>
              <View style={styles.fl_Directions}>
                <Icon name="heart" size={33} color="#D6CBCB" />
                <Entypo name="share" size={33} color="#D6CBCB" style={{ marginLeft: 5 }} />
              </View>
            </TouchableOpacity>
          )}
        />

      </View>
    </ImageBackground>
  )
}

export default Playlist

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: 'center'
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