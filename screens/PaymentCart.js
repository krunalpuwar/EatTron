import { StyleSheet, Text, View,TouchableOpacity ,ActivityIndicator} from 'react-native'
import React,{useState,useEffect} from 'react'
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../components/Style/Colors';

const PaymentCart = ({route}) => {

  const navigation = useNavigation();
  const {total} = route.params;
  const[loading,setLoading] = useState(false);

  const order_cash = () => {
    setLoading(true);

    setTimeout(() => {
      navigation.navigate('TrackOrder');
      setLoading(false);
    }, 2000);
  }


  return (
    <View style={{flex: 1}}>
      <Text style={{color:'black',fontSize:19,textAlign:'center',textTransform:'uppercase',marginTop:19}}>Payment Screen</Text>
      <View style={{backgroundColor:'green',justifyContent:'center',height:'auto',padding:'auto',marginHorizontal:19,marginTop:19}}>
      <Text style={{color:Colors.snow, fontSize:19,textAlign:'center',marginTop:19}}>Total Payable amount is: </Text>
          <Text style={{color:Colors.snow,fontSize:40,textAlign:'center',marginTop:19}}>₹{total}</Text>
      </View>
        <Text style={{marginTop:19,color:'black',fontSize:19,marginHorizontal:19}}>Payment Method</Text>
        
        <View style={{height:'auto',marginHorizontal:19,marginTop:19,borderColor:'black',borderWidth:0.5}}>
         
         {/* Card */}
         <TouchableOpacity style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <Octicons name='credit-card' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Card</Text>
             <Text style={{color:'black'}}> Mastercard,Visa,Rupay,Maestro,Amex </Text>
           </View>
         </TouchableOpacity>

         {/* UPI */}

         <TouchableOpacity style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}} onPress={() => navigation.navigate('Card')}>
           <Ionicons name='qr-code-outline' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Upi</Text>
             <Text style={{color:'black'}}> Googlepay,Phonepay,Bharatpay </Text>
           </View>
         </TouchableOpacity>

          {/* Wallet */}

         <TouchableOpacity style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}}>
           <Ionicons name='wallet-outline' size={29} color='black' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Wallet</Text>
             <Text style={{color:'black'}}> Mastercard,Visa,Rupay,Maestro,Amex </Text>
           </View>
         </TouchableOpacity>

          {/* Cash */}
         
         <TouchableOpacity style={{flexDirection:'row',margin:19,borderBottomWidth:1,padding:9}} onPress={order_cash}>
           <FontAwesome name='money' size={29} color='green' />
           <View style={{marginHorizontal:12}}>
             <Text style={{color:'black',fontWeight:'bold'}}>Cash</Text>
             <Text style={{color:'black'}}> Cash on Delivery </Text>
           </View>
         </TouchableOpacity>

         <View style={{position:'absolute',alignItems:'center',justifyContent:'center',width:'90%',marginTop:90}}>
          <ActivityIndicator size="large" color={Colors.primary} animating={loading} />
         </View>
         
         </View>

    </View>  
  )
}

export default PaymentCart

const styles = StyleSheet.create({})