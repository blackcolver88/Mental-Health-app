import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/firstPage'; 
import SecondPage from './components/secondPage'; 
import ThirdPage from './components/thirdPage'; 
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
