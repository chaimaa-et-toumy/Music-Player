import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home'
import Main from './screens/main'
import Playlist  from './screens/playlist';
import Favorite from './screens/favorite';
import Lyrics from './screens/lyrics';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name='Playlist' component={Playlist} options={{ headerShown: false }} />
        <Stack.Screen name='Favorite' component={Favorite} options={{ headerShown: false }} />
        <Stack.Screen name='Lyrics' component={Lyrics} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App