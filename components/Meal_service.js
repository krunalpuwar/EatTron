import {StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import meal from '../asset/img/meal.png';

import AntDesign from 'react-native-vector-icons/AntDesign';


const Meal_service = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.Two}>
      <TouchableOpacity onPress={() => navigation.navigate('TiffinHome')} style={styles.card}>
        <ImageBackground
          source={meal}
          style={{padding: 19}}>
          <Text style={{fontSize: 20, fontWeight: '700',textTransform:'uppercase'}}>Tiffin Service</Text>
          <Text style={{fontSize: 15}}>
            View All
            <AntDesign name="right" size={19} />
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Meal_service;

const styles = StyleSheet.create({
    Two: {
        marginHorizontal: 10,
        marginVertical: 10,
      },
      card: {
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
});
