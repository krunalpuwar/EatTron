import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.line}>
      
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    line:{
        borderWidth:0.5,
        borderBottomColor:'grey',
        marginHorizontal:19
    }
})