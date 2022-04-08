import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import { Cart } from '../screens/Cart';
import AllProduct from '../screens/AllProduct';

const Tab = createBottomTabNavigator();

const Tabbars = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen
        name="Home"
        component={Home}
         options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerShown: !true,
        }}
      />

    <Tab.Screen
        name="AllProduct"
        component={AllProduct}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="fast-food-outline" size={24} color={color} />
          ),
          headerShown: !true,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
          headerShown: !true,
        }}
      />

    <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name='user' size={24} color={color} />
          ),
          headerShown: !true,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabbars;

