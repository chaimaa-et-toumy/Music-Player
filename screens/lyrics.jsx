import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import LyricsSong from '../components/lyricsSong';

const Lyrics = ({ route }) => {
    const [lyrics, setLyrics] = useState('');
    const name = route.params.name

    const handleSearch = async () => {
        try {
            const accessToken = 'ezf1RBm8QmwDjJhDVN1g4S3Sb-2oXfcoEuWd7keApAC4iKtlclplKApCE4tKvxhw'
            const result = await LyricsSong(name, accessToken);
            setLyrics(result.lyrics);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        handleSearch()
    }, [])
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/imgs.png')}>
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
                {/* lyrics content */}
                <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', height: '100%', marginTop: '10%' }}>

                    <View >
                        <Text style={styles.Playlist}>Lyrics</Text>
                        <Text style={styles.lyrics}>{lyrics}</Text>
                    </View>
                </View>
            </ImageBackground >
        </View>
    )

}

export default Lyrics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 19,
        marginTop: 30
    },
    lyrics: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        fontSize: 18,
        marginHorizontal: 25,
    },
    Playlist: {
        color: "#E2D9B3",
        fontSize: 40,
        fontWeight: 400,
        fontWeight: 'bold',
        marginHorizontal: 25,
        textAlign: 'center'
    },
})