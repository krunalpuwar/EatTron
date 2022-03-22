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
import Shoplist from '../components/Shoplist';
import Top_Picks from '../components/Top_Picks';


const Home = () => {
 

  return (
    <View style={{backgroundColor:'rgb(255, 255, 255)'}}>
      <StatusBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />

        {/* Meal Service */}
        <Meal_service />

        {/* categories */}
        <Categories />

        {/* Top Picks */}
        <Top_Picks />

          {/* Shop List */}
          <Shoplist />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 

 
});

export default Home;
