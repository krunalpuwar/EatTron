import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';


const CartData = ({item,index,onDelete}) => {  
  
 
  return (
    <>
    
    <View key={index}>
   
    <View style={{backgroundColor:'green',flexDirection:'row',margin:6,marginTop:12,flexWrap:'wrap',padding:6,justifyContent:'space-between',borderRadius:9}}>
      
      <Image source={item.ProductImg} style={{height:100,width:120,resizeMode:'contain'}}/>
      
      <View style={{flexDirection:'column',marginLeft:10,alignItems:'flex-start',justifyContent:'center',marginRight:24}}>
        <Text style={{fontSize:19,fontWeight:'bold'}}>{item.ProductName}</Text>
        <Text style={{fontSize:12,fontWeight:'bold'}}>₹ {item.ProductMrp}</Text>   
      </View>

      <View style={{alignItems:'center',justifyContent:'center'}}>
      <TouchableOpacity style={{
          backgroundColor:'#f2f2f2',
          height:30,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:5,
          marginTop:10,
          padding:9
        }}
        onPress={() => onDelete(item.id)}>
          <Text style={{fontSize:9,fontWeight:'bold',color:'green'}} >Remove</Text>
        </TouchableOpacity> 
      </View>
    </View>

    </View>

       
      </>
  )
}

export default CartData;

const styles = StyleSheet.create({
  count_btn:{
    backgroundColor:'#f2f2f2',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:9,
    color:'black',
  }
})
