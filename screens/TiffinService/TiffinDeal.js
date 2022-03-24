import { FlatList, Image,ImageBackground, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Meals_data from '../../asset/data/Meals_data';
import AntDesign from "react-native-vector-icons/AntDesign"
import logo from '../../asset/img/person.png';
import bg from '../../asset/img/background.png'
import { useNavigation } from '@react-navigation/native';

const TiffinDeal = () => {

    const navigation = useNavigation();

    const mealdata = ({item}) => {
        return(

            <TouchableOpacity style={styles.meal_card} onPress={() => navigation.navigate('Tiffin_info',{
                item: item,
              })}>
                <View>
                    <Image source={item.image} style={styles.meal_img}/>
                </View>
                
                <View style={styles.meal_card_info}>
                    <Text style={styles.meal_name}>{item.name}</Text>
                    <Text style={styles.meal_rating}>
                        <AntDesign name="star" size={15} color="#ffd700"/>
                        {item.rating}</Text>
                    <Text style={styles.meal_time}>
                        <AntDesign name="clockcircle" size={10} color="#ffd700"/>
                          {item.time}</Text>
                    <Text style={styles.meal_add}>
                        <AntDesign name="enviroment" size={10} color="#ffd700"/>
                        {item.address}</Text>
                </View>

              </TouchableOpacity>
        )
    }
  return (
      <ImageBackground source={bg} >

      {/* <ScrollView> */}

         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:6}}>
           <AntDesign name="left" size={29} color="#e8e8e8" onPress={() => navigation.goBack()} />

              <View style={{flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity style={{marginHorizontal:6}} onPress={() => navigation.navigate('Search')} >
             <AntDesign name="search1" size={29} color="#e8e8e8"  />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
               <Image source={logo} style={{borderRadius: 20}} />
            </TouchableOpacity>
            </View>

         </View>

        <View style={styles.Meal_header}>
        </View>

            <FlatList 
             data={Meals_data}
             renderItem={mealdata}
             showsVerticalScrollIndicator={false}
             style={{marginBottom:60}}
             refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={() => {}}
                />
             }
             />



            {/* </ScrollView> */}
</ImageBackground>
  )
}

export default TiffinDeal;

const styles = StyleSheet.create({
    main_heading:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        margin:20,
    },
    meal_card:{
        height:'auto',
        width:'90%',
        borderRadius:10,
        backgroundColor:'rgb(255, 255, 255)',
        marginHorizontal:20,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10
    },
    meal_img:{
        height:100,
        width:100,

    },
    meal_card_info:{
        marginLeft:10,
        justifyContent:'space-around',
    
    },
    meal_name:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',

    },
    meal_add:{
        fontSize:12,
        color:'black',

    },
    meal_rating:{
        fontSize:12,
        color:'black',
    },
     meal_time:{
        fontSize:12,
        color:'black',
}
})