import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/firstPage';
import ThirdPage from './components/thirdPage'; 
import SecondPage from './components/secondPage'; 
import FourthPage from './components/fourthPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AssessmentHealthGoal from './components/AssessementHealthGoal';
import Gender from './components/Gender';
import Age from './components/age';
import Weight from './components/weight';
import Mood from './components/mood';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstPage">
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="FourthPage" component={FourthPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="AssessmentHealthGoal" component={AssessmentHealthGoal} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name='Age' component={Age} />
        <Stack.Screen name='Weight' component={Weight} />
        <Stack.Screen name='Mood' component={Mood} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
