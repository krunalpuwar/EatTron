import 'react-native-gesture-handler';
import React from 'react'
import {LogBox} from 'react-native'
import StackNav from './Nav/StackNav'
import { NavigationContainer } from '@react-navigation/native'
import { CartProvider } from './CartContext';
const App = () => {
  
  return (
    <CartProvider>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
    </CartProvider>
  )
}

export default App
