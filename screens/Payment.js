import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Payment = ({route}) => {

  const {Pro} = route.params;

  return (
    <View>
      <Text style={{color:'black',fontSize:19,textAlign:'center',textTransform:'uppercase',marginTop:19}}>Payment Screen</Text>
      <View style={{backgroundColor:'green',justifyContent:'center',height:'auto',padding:'auto',marginHorizontal:19,marginTop:19}}>
      <Text style={{color:'rgb(255,255,255)', fontSize:19,textAlign:'center',marginTop:19}}>Total Payable amount is: </Text>
          <Text style={{color:'rgb(255,255,255)',fontSize:40,textAlign:'center',marginTop:19}}>₹{Pro.reduce((acc, item) => acc + item.ProductMrp, 0)}</Text>
      </View>
        <Text style={{marginTop:19,color:'black',fontSize:19,marginHorizontal:19}}>Payment Method</Text>
        
        <View style={{height:'auto',marginHorizontal:19,marginTop:19,borderColor:'black',borderWidth:0.5}}>
         
         <View style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <Octicons name='credit-card' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Card</Text>
             <Text style={{color:'black'}}> Mastercard,Visa,Rupay,Maestro,Amex </Text>
           </View>
         </View>
         <View style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <Ionicons name='qr-code-outline' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Upi</Text>
             <Text style={{color:'black'}}> Googlepay,Phonepay,Bharatpay </Text>
           </View>
         </View>

         <View style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <Ionicons name='wallet-outline' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Wallet</Text>
             <Text style={{color:'black'}}> Mastercard,Visa,Rupay,Maestro,Amex </Text>
           </View>
         </View>

         <View style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <FontAwesome name='money' size={29} color='green' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Cash</Text>
             <Text style={{color:'black'}}> Cash on Delivery </Text>
           </View>
         </View>
         
         </View>

    </View>  
  )
}

export default Payment

const styles = StyleSheet.create({})