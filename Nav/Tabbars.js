import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from '../Screens/Home';
import MyCart from '../Screens/MyCart';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

const Tabbars = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
         options={{
        //   tabBarIcon: ({color}) => (
        //     <AntDesign name="home" size={24} color={color} />
        //   ),
          headerShown: !true,
        }}
      />

      <Tab.Screen
        name="MyCart"
        component={MyCart}
        options={{
        //   tabBarIcon: ({color}) => (
        //     <AntDesign name="shoppingcart" size={24} color={color} />
        //   ),
          headerShown: !true,
        }}
      />

    <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        //   tabBarIcon: ({color}) => (
        //     <AntDesign name='user' size={24} color={color} />
        //   ),
          headerShown: !true,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabbars;

