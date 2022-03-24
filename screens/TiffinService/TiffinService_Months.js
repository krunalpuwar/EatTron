import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import tiffinService from '../../asset/data/tiffinService'

const TiffinService_Months = () => {
  return (
    <View>
        <Text style={{color:'grey',fontSize:19,textAlign:'center'}}>TiffinService_Months</Text>
        {
            tiffinService.map((item,index)=>{
                return(
                    <View key={index}>
                        <Text style={{color:'grey',fontSize:19,textAlign:'center'}}>Months</Text>
                        <Text style={{color:'grey',fontSize:19,textAlign:'center'}}>{item.name}</Text>
                    </View>
                )
            })
        }
        
    </View>
  )
}

export default TiffinService_Months

const styles = StyleSheet.create({})