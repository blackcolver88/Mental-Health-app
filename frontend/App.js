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
import ProfessionalHelp from './components/professionalHelp';
import PhysicalDistress from './components/physicalDistress';
import SleepQuality from './components/sleepQuality';
import MedicationScreen from './components/medicationScreen';
import StressLevel from './components/stressLevel';
import Profile from './components/profile';
import Therapy from './components/therapy';
import CommunityPage from './components/communityPage';
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
        <Stack.Screen name='ProfessionalHelp' component={ProfessionalHelp} />
        <Stack.Screen name='PhysicalDistress' component={PhysicalDistress} />
        <Stack.Screen name='SleepQuality' component={SleepQuality} />
        <Stack.Screen name='MedicationScreen' component={MedicationScreen} />
        <Stack.Screen name='StressLevel' component={StressLevel} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Therapy' component={Therapy} /> 
        <Stack.Screen name='CommunityPage' component={CommunityPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
