import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect} from 'react'
import logo from '../asset/img/person.png'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"


export default function Header() {

  const navigation = useNavigation();
  
  useEffect(
    () => {
      getData();
    },[])

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

  return (
    <View style={styles.header_home}>
          
          <Text style={{color:'black',fontSize:15}}>Hello,{'\n'}<Text style={{fontWeight:'bold'}}>Krunal</Text></Text>  
          <View style={{flexDirection:'row',alignItems:'center'}}>
         
            <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
             <AntDesign name="shoppingcart" size={29} color="#e8e8e8" style={{margin:6,color:'black'}} />
             </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <Image source={logo} style={styles.logo1}  />
          </TouchableOpacity>
         
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    header_home: {
        marginTop:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20
   },
   logo1:{
     borderRadius:20,
     
   },
})