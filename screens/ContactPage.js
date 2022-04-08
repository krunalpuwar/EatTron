import { StyleSheet,View, Text ,TextInput,ImageBackground,TouchableOpacity,ToastAndroid} from 'react-native'
import React,{useState} from 'react'

import { Dimensions } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

// import bg from '../asset/img/backgroung.png';

import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

// console.log(auth()._user.phoneNumber);

const ContactPage = () => {

  const navigation = useNavigation();

  const[FirstName,setFirstName] = useState('');
  const[LName,setLName] = useState('');
  const[Email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[Pincode,setPincode] = useState('');

  const PhoneNumber = auth()._user.phoneNumber;
  console.log(PhoneNumber);

  const add = async() => {

    await firestore()
      .collection('Users')
      .doc(PhoneNumber)
      .set({
        Firstname: FirstName,
        Lastname: LName,
        Email: Email,
        Address: address,
        Pincode: Pincode,
        PhoneNumber: PhoneNumber,
      })
      .then(() => {
        console.log('User added!');
        ToastAndroid.show('Your Data Added Successfully', ToastAndroid.SHORT);
        navigation.navigate('Home');
      });
    
    }


  return (
      <>
      
    {/* <ImageBackground source={bg} style={{flex:1}}> */}

      <Text style={{
        fontSize: 28,
        color: '#d5e0d8',
        marginTop: Height/10,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,

      }}>Add Your Details</Text>

   <View style={styles.inputcontainer}>


      <View style={{flexDirection:'row'}}>
      <TextInput 
      placeholder='First Name' 
      style={styles.namearea} 
      value={FirstName}
      onChangeText={(text) => setFirstName(text)} 
      />

      <TextInput 
       placeholder='Last Name' 
       style={styles.namearea}
       value={LName}
        onChangeText={(text) => setLName(text)}
       />
      </View>
      <TextInput 
       placeholder='Enter Your Email'  
       style={styles.inputmain}
        value={Email}
        onChangeText={(text) => setEmail(text)}
       />
      <TextInput 
       placeholder='Enter Your Address' 
       style={styles.inputmain}
        value={address}
        onChangeText={(text) => setAddress(text)}
       />
      <TextInput 
       placeholder='Enter Your Pincode' 
       style={styles.inputmain}
        value={Pincode}
        onChangeText={(text) => setPincode(text)}
        keyboardType='numeric'
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
        onPress={add}

        >Submit</Text>
      </TouchableOpacity>
</View>
    {/* </ImageBackground> */}
    </>
  )}

export default ContactPage;

const styles = StyleSheet.create({
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