import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React, {useState, useEffect,useContext} from 'react';
import { Colors } from '../components/Style/Colors';
import {Dimensions} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import { CartContext } from '../CartContext';
import logo from '../asset/img/person.png';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { Styles } from '../components/Style/Style';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;




const Profile = () => {
  const navigation = useNavigation();
  const {user} = useContext(CartContext);
  const [userData,setUserData] = useState(null);
  
  
  useEffect(() => {
    getData();
  }, [userData]);

  const getData = async () => {
    await firestore()
      .collection('User_profile')
      .doc(user.uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          setUserData(doc.data());
        } else {
          console.log('No such document!');
          setUserData(null);
        }
      })
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

     
      <View style={styles.header}>
      <AntDesign name="arrowleft" size={25} color={Colors.black} style={styles.back} onPress={() => navigation.navigate('Home')}/>
                <Text style={{color:Colors.black}}>Profile</Text>
          <View style={styles.header_icon}>
          <AntDesign name="setting" size={25} color={Colors.black} onPress={() => navigation.navigate('Admin_login')}/>
            </View>
      </View>

      {userData != null && (
          <>
      <View style={styles.profile_wrapper}>
     
           <Image source={logo} style={styles.profile_img}/> 
           <View style={styles.profile_name}>
             <Text style={styles.details_txt}>{`${userData.Firstname} ${userData.Lastname}`}</Text>
             <Text style={styles.details_txt_name}>{userData.Email}</Text>
           </View>
           <View>
             <AntDesign name="edit" size={25} color={Colors.black} style={styles.edit} onPress={() => navigation.navigate('UpdateContact')}/>
           </View>
         
      </View>    

      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={logout}>
          <Text style={styles.btn_txt}>Logout</Text>
        </TouchableOpacity>
       </View>
  </>
  )}
  {
    userData == null && (
      <>
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text style={Styles.Heading}>No Data Found</Text>
      </View>
      <View style={styles.btn_container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ContactPage')}>
          <Text style={styles.btn_txt}>Add Details</Text>
        </TouchableOpacity>
       </View>
    
    <View style={styles.btn_container}>
    <TouchableOpacity style={styles.btn} onPress={logout}>
    <Text style={styles.btn_txt}>Logout</Text>
    </TouchableOpacity>
  </View> 
    
      </>

    )}
    
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.snow
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin:19
  },
  profile_wrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:Height*0.05,
    marginTop:19

  },
  profile_name:{
      alignItems:'center'
  },
  profile_img: {
    width: 80,
    height: 80,
    borderRadius: 9,
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
    width:'100%',
  },
  btn: {
    width: Width / 1.2,
    height: Height / 20,
    backgroundColor: '#adaca8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  details_txt_name:{
    fontSize: 12,
    color:'black',
  },
  btn_txt: {
    fontSize: 18,
    color: Colors.snow,
    fontWeight: '400',
    textTransform:'uppercase'
  },
  history_wrapper:{
    marginTop:10,
    marginHorizontal:10
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
