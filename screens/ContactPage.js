import React,{useState,useContext} from 'react'
import { StyleSheet,View, Text ,TextInput,TouchableOpacity,ToastAndroid,ImageBackground} from 'react-native'


import { Dimensions } from 'react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

import bg from '../asset/img/background.png';

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../components/Style/Colors';

import { CartContext } from '../CartContext'


const ContactPage = () => {

  const navigation = useNavigation();

  const[FirstName,setFirstName] = useState('');
  const[LName,setLName] = useState('');
  const[Email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[Pincode,setPincode] = useState('');

  const {user} = useContext(CartContext);
  console.log(user.uid);

  const add = async() => {

    await firestore()
      .collection('User_profile')
      .doc(user.uid)
      .set({
        Firstname: FirstName,
        Lastname: LName,
        Email: Email,
        Address: address,
        Pincode: Pincode,
        Uid:user.uid
      })
      .then(() => {
        console.log('User added!');
        ToastAndroid.show('Your Data Added Successfully', ToastAndroid.SHORT);
        navigation.navigate('Home');
      });
    
    }


  return (
      <>
    <View style={styles.container}>
    <ImageBackground 
      source={bg}
      style={{width: Width, height: Height}}
      >
      <Text style={styles.title}>Add Your Details</Text>
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
        <Text style={styles.btn_txt} onPress={add}>Submit</Text>
      </TouchableOpacity>
</View>
</ImageBackground>

</View>
    </>
  )}

export default ContactPage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:Colors.snow,
    alignItems:'center',
    justifyContent:'center'

  },
  title:{
        fontSize: 28,
        color: '#d5e0d8',
        marginTop: Height/10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,

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
  },
  btn_txt:{
    color: '#d5e0d8',
          fontSize: 20,
          marginTop: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          backgroundColor:'green',
          padding:Width/30
  }
})