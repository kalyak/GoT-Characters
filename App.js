import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import CharDetails from './src/components/CharacterDetails';
import CharList from './src/components/CharactersList';
import HomeScreen from './src/components/HomeScreen';
import {store} from './src/redux/store';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Welcome', animationTypeForReplace: 'pop'}}
          />
          {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
          <Stack.Screen name="Character List" component={CharList} />
          <Stack.Screen name="Character Details" component={CharDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
