import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Main from './screens/main'
import Playlist from './screens/playlist';
import Favorite from './screens/favorite';

// const { Navigator, Screen } = createNativeStackNavigator();
const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Screen name='Playlist' component={Playlist} options={{ headerShown: false }} />
        <Screen name='Favorite' component={Favorite} options={{ headerShown: false }} />
      </Navigator> */}


      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Playlist' component={Playlist} options={{ headerShown: false }} />
        <Stack.Screen name='Favorite' component={Favorite} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App