import React from 'react';
import {View,ScrollView,StatusBar} from 'react-native';

// custom components
import Slider from '../components/Slider';
import Header from '../components/Header';
import Meal_service from '../components/Meal_service';
import { Colors } from '../components/Style/Colors';
import { ProductsList } from './ProductList';


const Home = () => {

  

  return (
    <View style={{backgroundColor:Colors.snow}}>
    <StatusBar backgroundColor={Colors.snow} barStyle='dark-content' />
      {/* Vertical Scroll View */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
          <Header />

        {/* Slider */}
          <Slider />

        {/* Meal Service */}
          <Meal_service />

        {/* categories */}
          <ProductsList /> 


      </ScrollView>
    </View>
  );
};

export default Home;
