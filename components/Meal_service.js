import {StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import meal from '../asset/img/meal.png';

// import AntDesign from 'react-native-vector-icons/AntDesign';


const Meal_service = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.Two}>
      <TouchableOpacity>
        <ImageBackground
          source={meal}
          style={{padding: 19, borderWidth: 5, borderColor: 'green'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Food Service</Text>
          <Text style={{fontSize: 15}}>
            View All
            {/* <AntDesign name="right" size={19} /> */}
          </Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SelectMonths')}>
        <ImageBackground
          source={meal}
          style={{padding: 19, borderWidth: 5, borderColor: 'green'}}>
          <Text style={{fontSize: 20, fontWeight: '700'}}>Tiffin Service</Text>
          <Text style={{fontSize: 15}}>
            View All
            {/* <AntDesign name="right" size={19} /> */}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default Meal_service;

const styles = StyleSheet.create({
    Two: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
        marginVertical: 10,
      },
});
