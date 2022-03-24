import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import logo from '../../asset/img/person.png';
import { useNavigation } from '@react-navigation/native';
 

const Tiffin_info = ({route}) => {
    const {item} = route.params;
    const navigation = useNavigation();
    

    return (
        <ScrollView>

    <View style={styles.container}>

     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:20,marginVertical:6}}>

        <View>
           <AntDesign name="left" size={29} color="black" onPress={() => navigation.goBack()} />
        </View>

        <View style={{flexDirection:'row',alignItems:'center'}}>
           <TouchableOpacity style={{marginHorizontal:6}} onPress={() => navigation.navigate('Search')} >
             <AntDesign name="search1" size={29} color='black' />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
              <Image source={logo} style={{borderRadius: 20}} />
            </TouchableOpacity>
        </View>

     </View>

      <Image source={item.image} style={styles.meal_img}/>

      <View style={{backgroundColor:'#f2f2f2',padding:20}}>
          <Text style={{
                fontSize:20,
                fontWeight:'bold',
                marginBottom:20,
                textTransform:'uppercase'
            }}>opening Hours</Text>
          <Text style={{color:'black'}}>{item.opening}</Text>

          <Text style={{
              fontSize:20,
                fontWeight:'bold',
                marginTop:20,
                textTransform:'uppercase'
            }}>Lunch Menu</Text>
          <Text style={{color:'black'}}>{item.Lunch}</Text>

            <Text style={{
                fontSize:20,
                fontWeight:'bold',
                textTransform:'uppercase',
                color:'black'
            }}>Price : {item.price}</Text>

          <TouchableOpacity style={styles.booknow_btn}>
              <Text style={{color:'black',fontWeight:'bold'}}  onPress={() => navigation.navigate('PaymentScreen')} >Book Now</Text>
          </TouchableOpacity>
      
      </View>
      
    </View>
            </ScrollView>
  )
}

export default Tiffin_info

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    meal_img:{
        width:'90%',
        height:200,
        marginVertical:10,
        marginHorizontal:20,
        alignItems:'center',
        justifyContent:'center',
    },
    back_btn:{
        fontSize:20,
        color:'black',
        margin:20,
    },
    booknow_btn:{
        backgroundColor:'#5cfc47',
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',

    }
})