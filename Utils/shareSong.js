import { Share, Alert } from "react-native"

const onShare = async (id, name) => {

    setTimeout(async () => {
        try {
            const result = await Share.share({
                message: `The name of the song is : ${name}`
            });
        } catch (error) {
            console.log(error.message);
            Alert.alert("can't share this song");
        }
    }, 500);
};

export default onShare