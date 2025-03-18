
import React  from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from "./components/Splashh.js";
import Login from './components/Login.js';
import Signup from './components/Signup.js';

const Stack=createStackNavigator();

export default function App() {
     
  return (
    <NavigationContainer style={styles.container} >
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}}>
         <Stack.Screen name="Login" component={Login}/>
         <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
