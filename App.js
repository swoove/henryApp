import React from 'react';
import{createAppContainer}
from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { createTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TestScreen from './src/screens/TestScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountsList from './src/components/AccountsList.js';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { DrawerActions } from '@react-navigation/native';
import {Provider as AuthProvider} from './src/context/AuthContext';






// const switchNavigator = createSwitchNavigator({
//   loginFlow: createStackNavigator({
//     Signup: SignupScreen,
//     Signin: SigninScreen
//   }),

//   mainFlow: createBottomTabNavigator({
//     trackListFlow: createStackNavigator({
//       trackList: TrackListScreen,
//       TrackDetail: TrackDetailScreen
//     }),
//     TrackCreate: TrackCreateScreen,
//     Account: AccountScreen
//   })
// });

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
var aList = new AccountsList();

function tabMan(){
  return(
    <>
      <Tab.Navigator initialRouteName = 'AccountScreen'
      screenOptions = {{gestureEnabled: false}}
      >
        
        <Tab.Screen
        name = "Account"
        component = {accountStack}
        />

        <Tab.Screen
        name = "TrackCreate"
        component = {TrackCreateScreen}
        />

      </Tab.Navigator>

      
    </>

  );
}

function accountStack()
{
  return (
    <Stack.Navigator initialRouteName = 'AccountScreen'
      screenOptions = {{gestureEnabled: false}}>
        
        <Stack.Screen

        
        name = "Account"
        component = {HomeScreen}
        />

        <Stack.Screen 
        name = "Test"
        component = {TestScreen}/>

        

      </Stack.Navigator>
  );
}

function App(){
 
  const isLoggedIn = false;
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin"
      screenOptions = {{gestureEnabled: false}}
      
      
      >
        {isLoggedIn ?(
          <Stack.Screen
          name = "Account"
          component={tabMan}

          />
        ) :  (
        <>
          <Stack.Screen name = "Signin" 
          component = {SigninScreen}
          options = {{headerShown: false }}/> 

          <Stack.Screen
            name = "Account"
            component={tabMan} 
            options = {{headerShown: false }}/>

          <Stack.Screen
            name = "Signup"
            component={SignupScreen} 
            options = {{headerShown: false }}/>
             
        </>
        )
        }
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default () =>{
  return(
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
}

export {aList};
