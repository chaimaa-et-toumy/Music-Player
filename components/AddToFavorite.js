import { ToastAndroid } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddToFavorites = async (musicData) => {
    let favorites = [];
    try {
        const value = await AsyncStorage.getItem("favorites");
        if (value !== null) {
            favorites = JSON.parse(value);
            console.log(favorites);
        }
    } catch (error) {
        console.log(error);
    }

    let isAdded = false;
    favorites.map((item) => {
        if (item.id === musicData.id) {
            isAdded = true;
            console.log("Music already exist in Favorite!");
        }
    });

    try {
        if (!isAdded) {
            favorites.push(musicData);
            ToastAndroid.show("Music added successfully!", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show(
                "Music already exist in Favorite!",
                ToastAndroid.SHORT
            );
        }
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
};
