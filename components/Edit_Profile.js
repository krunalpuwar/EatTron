import { StyleSheet, Text, View ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
// import logo from '../assets/img/person.png';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const Edit_Profile = () => {

    const navigation = useNavigation();

  return (
    
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.txt}>Fill Your Details</Text>

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ContactPage')}>
             <Text style={styles.btn_txt}>Edit Profile</Text>
        </TouchableOpacity>
     </View>
    </View>
  )
}

export default Edit_Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#366491',
    },
    header:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#366491',
        marginTop:Height/10,

    },
    Profile_img:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    txt:{
        fontSize: 20,
        color: '#d5e0d8',
        marginTop: 10,
        fontWeight: 'bold',

    },
    btn:{
        width: Width/1.5,
        height: Height/20,
        backgroundColor: '#23b04a',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    btn_txt:{
        fontSize: 18,
        color: '#d5e0d8',
        fontWeight: 'bold',
    }
})