import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,

} from 'react-native';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />

        {/* Meal Service */}
        <Meal_service />

        {/* categories */}
        {/* <Categories /> */}

          <ProductsList />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 

 
});

export default Home;
