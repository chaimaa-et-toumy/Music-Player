import { StyleSheet, Text, View, Image, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import ConfirmDelete from '../components/ConfirmDelete';
import { useState } from 'react';


const fakeData = [
  {
    id: 1,
    name: 'hhh and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 2,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 3,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
    img: require('../assets/images/imgs.png')
  },
  {
    id: 4,
    name: 'Soul and Mina',
    singer: 'CHKO HIBSON',
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



const Favorite = () => {
  const [showModel, setShowModel] = useState(false);
  return (
    <>
      <ImageBackground style={styles.container} source={require('../assets/images/imgs.png')}>
        {/* nav bar */}
        <View style={styles.main}>
          <View style={styles.navbar}>
            <Icon name="angle-left" size={35} color="white" />
            <Entypo name="dots-three-horizontal" size={30} color="white" />
          </View>
        </View>

        {/* song playlist */}
        <View>
          <Text style={[styles.Playlist, { marginBottom: "5%" }]}>Favorite</Text>
          <FlatList
            data={fakeData}
            keyExtractor={item => item.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <View style={styles.card} >
                <View style={styles.fl_Directions}>
                  <Image source={item.img} style={{ height: 60, width: 60, borderRadius: 10, borderColor: 'white', borderWidth: 1 }} />
                  <View style={{ marginLeft: 15 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ color: '#A6A4A1', fontSize: 15, fontWeight: 'bold' }}>{item.singer}</Text>
                  </View>
                </View>
                <View style={styles.fl_Directions}>
                  <Icon name="heart" size={33} color="#D6CBCB" />
                  <TouchableOpacity
                    onPress={() => {
                      setShowModel(item.id);
                    }}
                  >
                    <Icon name="trash" size={33} color="#D6CBCB" style={{ marginLeft: 13 }} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </ImageBackground>
      {showModel && (
        <ConfirmDelete
          showModel={showModel}
          setShowModel={setShowModel}
        />
      )}
    </>


  )
}

export default Favorite

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 19,
  },
  main: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
  },
  Playlist: {
    color: "#E2D9B3",
    fontSize: 40,
    fontWeight: 400,
    marginTop: '14%',
    fontWeight: 'bold',
    marginHorizontal: 25,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.7)',
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