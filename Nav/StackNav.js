import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//custom Components

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
import { ProductsList } from '../screens/ProductList';
import { ProductDetails } from '../screens/ProductDetail';
import { ProductItems } from '../screens/ProductItems';
import { Cart } from '../screens/Cart';
import MainPayment from '../screens/MainPayment';
import TrackOrder from '../screens/TrackOrder';
import Admin_login from '../screens/admin/Admin_login';
import Admin_panel from '../screens/admin/Admin_panel';
import OrderHistory from '../screens/History/OrderHistory';
import Data from '../screens/axi/Data';
import Deatils_axi from '../screens/axi/Deatils_axi';
import Cart_data from '../screens/axi/Cart_data';
import ListOrder from '../screens/axi/ListOrder';
import Card from '../screens/Payment/Card';


const Stack = createNativeStackNavigator();


const StackNav = () => {

  return (
    <Stack.Navigator>
      
      <Stack.Group>
          <Stack.Screen name='Login' component={Login} options={{headerShown:!true}} />
          <Stack.Screen name='OtpPage' component={OtpPage} options={{headerShown:!true}} />
      </Stack.Group>
      
          <Stack.Screen name='Home' component={Tabbars} options={{headerShown:!true}} />
          
          {/* User Details */}
          <Stack.Screen name='ContactPage' component={ContactPage} options={{headerShown:!true}} />
          <Stack.Screen name='Profile' component={Profile} options={{headerShown:!true}} />
          <Stack.Screen name='UpdateContact' component={UpdateContact} options={{headerShown:!true}} />
          <Stack.Screen name='OrderHistory' component={OrderHistory} options={{headerShown:!true}} />
          
          {/* Product  */}
          <Stack.Screen name='Products' component={ProductsList } />
          <Stack.Screen name='ProductDetails' component={ProductDetails} options={{headerShown:!true}} />
          <Stack.Screen name='ProductItems' component={ProductItems} options={{headerShown:!true}} />
          <Stack.Screen name='Cart' component={Cart} options={{headerShown:!true}} />
          
          {/* Payment */}
          <Stack.Screen name='MainPayment' component={MainPayment} options={{headerShown:!true}} />
          <Stack.Screen name='Payment' component={Payment} options={{headerShown:!true}} />
          <Stack.Screen name='Card' component={Card} options={{headerShown:!true}} />
          <Stack.Screen name='PaymentCart' component={PaymentCart} options={{headerShown:!true}} />
          <Stack.Screen name='TrackOrder' component={TrackOrder} options={{headerShown:!true}} />

          {/* Admin */}
          <Stack.Screen name='Admin_login' component={Admin_login} options={{headerShown:!true}} />
          <Stack.Screen name='Admin_panel' component={Admin_panel} options={{headerShown:!true}} />

          
          {/* Tiffin service */}
          <Stack.Screen name='TiffinPayment' component={TiffinPayment} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinHome' component={TiffinHome} options={{headerShown:!true}} />
          <Stack.Screen name='TiffinDetails' component={TiffinDetails} options={{headerShown:!true}} />

          {/* Practice Concept */}
          <Stack.Screen name='data' component={Data} options={{headerShown:!true}} />
          <Stack.Screen name='Deatils_axi' component={Deatils_axi} options={{headerShown:!true}} />
          <Stack.Screen name='Cart_data' component={Cart_data} options={{headerShown:!true}} />
          <Stack.Screen name='ListOrder' component={ListOrder} options={{headerShown:!true}} />

     </Stack.Navigator>
  )
}

export default StackNav;

