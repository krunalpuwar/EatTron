import {StyleSheet, Text, View, StatusBar, TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
// import logo from '../assets/img/person.png';

import {Dimensions} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import Edit_Profile from '../components/Edit_Profile';
import { useNavigation } from '@react-navigation/native';

import bg from '../asset/img/Profile_img/background.png'
import Divider from '../components/Divider';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;




const Profile = () => {
  const [setdata, newdata] = useState(null);
  const navigation = useNavigation();
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await firestore()
      .collection('Users')
      .doc('Contact_details')
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          newdata(snapshot.data());
        } else {
          console.log('Data Not Found');
        }
      });
  };

  const logout = async() => {
    await auth()
      .signOut()
      .then(() => 
        console.log('User signed out!'),
        navigation.navigate('Login')  
    );
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={bg} style={{height:'100%',width:'100%'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        { 
        setdata != null && (
          <>
            <View style={styles.details_wrapper}>
             

              <Text style={styles.details_txt_name}>
                {`${setdata.Firstname} ${setdata.Lastname}`}
              </Text>
              <Divider />
              <Text style={styles.details_txt}>{setdata.Email}</Text>
              <Divider />
              <Text style={styles.details_txt}>
                 {setdata.Address}
              </Text>
              <Divider />
              <Text style={styles.details_txt}>
                {setdata.Pincode}
              </Text>
              <Divider />

            <View style={styles.btn_container}>

              <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('UpdateContact')}>
                <Text style={styles.btn_txt}>Edit Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={logout}>
                <Text style={styles.btn_txt}>Logout</Text>
              </TouchableOpacity>
            
            </View>
            
            </View>
          </>
        )}
        </ImageBackground>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#366491',
    marginTop: Height / 10,
  },
  Profile_img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  txt: {
    fontSize: 20,
    color: '#d5e0d8',
    marginTop: 10,
    fontWeight: 'bold',
  },
  btn_container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: Width / 1.5,
    height: Height / 20,
    backgroundColor: '#23b04a',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  details_txt_name:{
    fontSize: 18,
    fontWeight: '600',
    margin: 6,
    color:'black',
    textTransform:'uppercase'
  },
  btn_txt: {
    fontSize: 18,
    color: '#d5e0d8',
    fontWeight: '400',
    textTransform:'uppercase'
  },
  details_wrapper: {
    flex:1,
//    alignItems:'center',
   justifyContent:'center',
   marginHorizontal:Width/20,
    
   
  },
  details_txt: {
    fontSize: 18,
    fontWeight: '600',
    margin: 6,
    color:'black'
  },
});
