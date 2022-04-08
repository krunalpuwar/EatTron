import { StyleSheet, Text, View ,Modal,ActivityIndicator} from 'react-native'
import React from 'react'
import { Colors } from './Style/Colors'

const Loader = () => {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    }
})