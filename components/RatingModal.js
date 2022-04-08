import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native-paper'

const RatingModal = () => {
  return (
    <View style={{
        backgroundColor:Colors.greenA100,
        height:200,
        width:200,
        position: 'absolute',
        
    }}>
      <Text>RatingModal</Text>
    </View>
  )
}

export default RatingModal

const styles = StyleSheet.create({})