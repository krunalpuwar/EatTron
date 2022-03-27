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
import UpdateContact from '../screens/UpdateContact';
import Payment from '../screens/Payment';
import TiffinService_Months from '../screens/TiffinService/TiffinService_Months';
import TiffinDeal from '../screens/TiffinService/TiffinDeal';
import Tiffin_info from '../screens/TiffinService/Tiffin_Info';
import PaymentCart from '../screens/PaymentCart';
import SelectMonths from '../screens/TiffinService/SelectMonths';
import SelectTime from '../screens/TiffinService/SelectTime';


const Stack = createNativeStackNavigator();


const StackNav = () => {

  return (
    <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{headerShown:!true}} />
          <Stack.Screen name='OtpPage' component={OtpPage} options={{headerShown:!true}} />
          <Stack.Screen name='Home' component={Home} options={{headerShown:!true}} />
          <Stack.Screen name="Data" component={Data}  options={{headerTintColor:'black',headerShown:!true}} />
          <Stack.Screen name='Details' component={Details} options={{headerShown:!true}} />
          <Stack.Screen name='MyCart' component={MyCart} options={{headerShown:true}} />
          <Stack.Screen name='Profile' component={Profile} options={{headerShown:!true}} />
          <Stack.Screen name='ContactPage' component={ContactPage} options={{headerShown:!true}} />
          <Stack.Screen name='UpdateContact' component={UpdateContact} options={{headerShown:!true}} />
          <Stack.Screen name='Payment' component={Payment} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinService_Months' component={TiffinService_Months} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinDeal' component={TiffinDeal} options={{headerShown:!true}} />
          <Stack.Screen name='Tiffin_info' component={Tiffin_info} options={{headerShown:!true}} />
          <Stack.Screen name='PaymentCart' component={PaymentCart} options={{headerShown:!true}} />
          <Stack.Screen name='SelectMonths' component={SelectMonths} options={{headerShown:!true}} />
          <Stack.Screen name='SelectTime' component={SelectTime} options={{headerShown:!true}} />
          
     </Stack.Navigator>
  )
}

export default StackNav;

