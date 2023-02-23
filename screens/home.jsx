import { StyleSheet, Text, View, Image, TouchableOpacity,BackHandler } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.img} />
      <Text style={styles.title}>welcome to Music App </Text>
      <Text style={styles.title2}>Getting started</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Playlist')}>
        <LinearGradient colors={['#FFB61D', 'rgba(229, 50, 98, 1)']} style={styles.btn}
          start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} />
        <Text style={styles.title_btn}>let's Go</Text>
        <Icon name="angle-right" size={25} color="#fff" style={{ position: 'absolute', right: 16, top: 17 }} />
      </TouchableOpacity>
      <Text style={styles.footer}>by chaimaa et-toumy</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    position: 'absolute',
    top: 80,
    zIndex: 3,
    width: '83%',
    height: '40%',
  },
  title: {
    color: "#FFFFFF",
    fontSize: 33,
    marginTop: 250,
    fontWeight: 700,
  },
  title2: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 400,
    marginTop: 18,
    marginBottom: 35,
  },
  footer: {
    fontSize: 14,
    fontWeight: 400,
    marginTop: 15,
    position: 'absolute',
    bottom: 20,
    color: "grey"
  },
  btn: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  title_btn: {
    color: "#FFFFFF",
    fontSize: 24,
    paddingHorizontal: 36,
    paddingVertical: 13,

  },

})