import React,{useEffect,useContext} from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../asset/img/person.png'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import { Badge } from 'react-native-paper'
import { CartContext } from '../CartContext';



export default function Header() {
  
  const {getItemsCount} = useContext(CartContext);
  const navigation = useNavigation();
  


  return (
    <View style={styles.header_home}>
          
          <Text style={{color:'black',fontSize:15}}>Hello,{'\n'}<Text style={{fontWeight:'bold'}}>Krunal</Text></Text>  
          <View style={{flexDirection:'row',alignItems:'center'}}>        
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
             <AntDesign name="shoppingcart" size={29} color="#e8e8e8" style={{margin:6,color:'black'}} />
             <Badge style={{position:'absolute'}}>{getItemsCount()}</Badge>
             </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('data')}>
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