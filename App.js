import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import { colors } from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium' : require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold' : require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular' : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.redOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
