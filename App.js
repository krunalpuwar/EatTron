import 'react-native-gesture-handler';
import React from 'react'
import StackNav from './Nav/StackNav'
import { NavigationContainer } from '@react-navigation/native'
import { CartProvider } from './CartContext';

import {LogBox} from 'react-native'
LogBox.ignoreAllLogs(true)

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
