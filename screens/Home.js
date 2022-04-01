import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,

} from 'react-native';

// custom components
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Header from '../components/Header';
import Meal_service from '../components/Meal_service';
import Data from './Data'
import { Colors } from '../components/Style/Colors';


const Home = () => {
 

  return (
    <View style={{backgroundColor:Colors.snow}}>
      <StatusBar backgroundColor={Colors.snow} barStyle='dark-content' />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />

        {/* Meal Service */}
        <Meal_service />

        {/* categories */}
        <Categories />


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 

 
});

export default Home;
