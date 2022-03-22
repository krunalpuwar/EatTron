import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

//custom Components
import Home from '../screens/Home';
import Data from '../screens/Data';
import Details from '../screens/Details';
import MyCart from '../screens/MyCart';
import Profile from '../screens/Profile';
import ContactPage from '../screens/ContactPage';
import Login from '../screens/Login';
import OtpPage from '../screens/OtpPage';


const Stack = createNativeStackNavigator();


const StackNav = () => {

  return (
    <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown:!true}} />
          <Stack.Screen name='OtpPage' component={OtpPage} options={{headerShown:!true}} />
          <Stack.Screen name='Home' component={Home} options={{headerShown:!true}} />
          <Stack.Screen name="Data" component={Data}  options={{headerTintColor:'black',headerShown:!true}} />
          <Stack.Screen name='Details' component={Details} options={{headerShown:!true}} />
          <Stack.Screen name='MyCart' component={MyCart} options={{headerShown:!true}} />
          <Stack.Screen name='Profile' component={Profile} options={{headerShown:!true}} />
          <Stack.Screen name='ContactPage' component={ContactPage} options={{headerShown:!true}} />
          
     </Stack.Navigator>
  )
}

export default StackNav;

