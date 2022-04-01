import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

//custom Components
import Data from '../screens/Data';
import Details from '../screens/Details';
import MyCart from '../screens/MyCart';
import Profile from '../screens/Profile';
import ContactPage from '../screens/ContactPage';
import Login from '../screens/Login';
import OtpPage from '../screens/OtpPage';
import UpdateContact from '../screens/UpdateContact';
import Payment from '../screens/Payment';
import PaymentCart from '../screens/PaymentCart';
import TiffinHome from '../screens/TiffinPage/TiffinHome';
import TiffinDetails from '../screens/TiffinPage/TiffinDetails';
import TiffinPayment from '../screens/TiffinPage/TiffinPayment';
import Tabbars from './Tabbars';


const Stack = createNativeStackNavigator();


const StackNav = () => {

  return (
    <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown:!true}} />
          <Stack.Screen name='OtpPage' component={OtpPage} options={{headerShown:!true}} />
          <Stack.Screen name='Home' component={Tabbars} options={{headerShown:!true}} />
          <Stack.Screen name="Data" component={Data}  options={{headerTintColor:'black',headerShown:!true}} />
          <Stack.Screen name='Details' component={Details} options={{headerShown:!true}} />
          <Stack.Screen name='MyCart' component={MyCart} options={{headerShown:true}} />
          <Stack.Screen name='Profile' component={Profile} options={{headerShown:!true}} />
          <Stack.Screen name='ContactPage' component={ContactPage} options={{headerShown:!true}} />
          <Stack.Screen name='UpdateContact' component={UpdateContact} options={{headerShown:!true}} />
          <Stack.Screen name='Payment' component={Payment} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinPayment' component={TiffinPayment} options={{headerShown:!true}} />
          <Stack.Screen name='PaymentCart' component={PaymentCart} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinHome' component={TiffinHome} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinDetails' component={TiffinDetails} options={{headerShown:!true}} />
     </Stack.Navigator>
  )
}

export default StackNav;

