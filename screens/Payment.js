import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'

const Payment = ({route}) => {

  const Pro = route.params;
  const {ProductMrp} = Pro;


  return (
    <View>
      <Text style={{color:'grey',fontSize:19,textAlign:'center'}}>Payment Screen</Text>
      {
        <Text>Price: {ProductMrp}</Text>
      }
      {console.log(Pro.ProductMrp)}
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({})