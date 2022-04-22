import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,ToastAndroid} from 'react-native'
import React ,{useState,useContext} from 'react'

import {Dimensions} from 'react-native';

import bg from '../asset/img/background.png';

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../components/Style/Colors';

import { CartContext } from '../CartContext';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



const UpdateContact = () => {

    const navigation = useNavigation();
    const {user} = useContext(CartContext);
    
    const[FirstName,setFirstName] = useState('');
    const[LName,setLName] = useState('');
    const[Email,setEmail] = useState('');
    const[address,setAddress] = useState('');
    const[Pincode,setPincode] = useState('');

    const Update_value = () => {
        firestore()
        .collection('User_profile')
        .doc(user.uid)
        .update({
          Firstname: FirstName,
          Lastname: LName,
          Email: Email,
          Address: address,
          Pincode: Pincode
        })
        .then(() => {
          console.log('User Updated');
          ToastAndroid.show('Your Data Updated Successfully', ToastAndroid.SHORT);
          navigation.navigate('Profile');
        });
    }
    
  return (
<ImageBackground source={bg} style={{flex:1}}>
      <Text style={styles.Heading}>Update Your Details</Text>

<View style={styles.inputcontainer}>


      <View style={{flexDirection:'row'}}>
      <TextInput 
      placeholder='First Name' 
      style={styles.namearea} 
      value={FirstName}
      onChangeText={(text) => setFirstName(text)} 
      placeholderTextColor={Colors.black}
      />

      <TextInput 
       placeholder='Last Name' 
       style={styles.namearea}
       value={LName}
        onChangeText={(text) => setLName(text)}
      placeholderTextColor={Colors.black}
       />
      </View>
      <TextInput 
       placeholder='Enter Your Email'  
       style={styles.inputmain}
        value={Email}
        onChangeText={(text) => setEmail(text)}
      placeholderTextColor={Colors.black}
       
       />
      <TextInput 
       placeholder='Enter Your Address' 
       style={styles.inputmain}
        value={address}
        onChangeText={(text) => setAddress(text)}
      placeholderTextColor={Colors.black}
       
       />
      <TextInput 
       placeholder='Enter Your Pincode' 
       style={styles.inputmain}
        value={Pincode}
        onChangeText={(text) => setPincode(text)}
        keyboardType='numeric'
        placeholderTextColor={Colors.black}
       
       />

      <TouchableOpacity>
        <Text style={{  
          color: '#d5e0d8',
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor:'green',
          padding:Width/30
        }} 
        onPress={Update_value}

        >Submit</Text>
      </TouchableOpacity>
</View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  Heading:{
    fontSize: 19,
    color: Colors.snow,
    marginTop: Height/10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textTransform:'uppercase'
  },
  namearea:{
    width: Width/3.2,
    height: Height/20,
    borderColor: 'black',
    borderWidth: 0.5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    color:'black',
    marginHorizontal:6
  },
  inputmain:{
    width: Width/1.5,
    height: Height/20,
    borderColor: 'black',
    borderWidth: 0.5,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    color:'black',
  },
  inputcontainer:{
    flex: 1,
    alignItems: 'center',
    // marginTop:Height/10,

  }
})


export default UpdateContact

