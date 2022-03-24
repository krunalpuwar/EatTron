import { StyleSheet, Text, View,TouchableOpacity,ImageBackground} from 'react-native'
import React from 'react'
import bg from '../../assets/img/background.png'
import { useNavigation } from '@react-navigation/native';


const SelectMonths = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={bg} style={{flex:1,alignItems:'center'}}>

        <Text style={styles.heading}>Select Months</Text>
        
        <View>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SelectTime')} >
                <Text style={styles.month}>3 Months</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SelectTime')}>
                <Text style={styles.month}>6 Months</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SelectTime')}>
                <Text style={styles.month}>12 Months</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>

  )
}

export default SelectMonths

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
        color:'#e9ebe8'

    },
    btn:{
        backgroundColor:'#34e056',
        width:300,
        height:120,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginVertical:40
    },
    month:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'

    }
})