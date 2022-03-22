import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import slider from '../asset/data/slider'



const slides =({item})=>{
    return(
      <View>
       
        <Image source={item.imgs} 
        style={{
          height:200,
          width:300,
          resizeMode: 'cover',
          borderRadius:10,
          marginHorizontal: item.id=1 ? 6 : 20
           }} />
      </View>
    )
  }



export default function Slider() {
  return (
    <View style={{
      margin:20,
    }}>
          <FlatList  
          data={slider}
          renderItem={slides}
          keyExtractor={(item) => item.id}
          horizontal={true}
          />
        </View>
  )
}
