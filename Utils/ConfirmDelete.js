
import { Alert } from 'react-native';


const ConfirmDelete = ({ deleteMusic, showModel, setShowModel }) => {

  return Alert.alert(
    "Are your sure?",
    "Are you sure you want to remove this song?",
    [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          deleteMusic(showModel)
          setShowModel(false);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
        onPress: () => {
          setShowModel(false)
        }
      },
    ]
  );
};

export default ConfirmDelete