import { StyleSheet, Text, View ,FlatList,TouchableOpacity,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Colors } from '../../components/Style/Colors';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../../components/Style/Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cart_data = () => {

    const navigation = useNavigation();
    const [lists,setLists] = useState(null);
    const [data ,setData] = useState([]);


    const del  = async(id) => {
        await axios.post('http://smartex.lakecitypivotz.com/api/deleteCart',{
            cart_id:id,
	        customer_id:"23"
        })
        .then(res => {  
            console.log(res.data)
            alert(res.data.message)
        })
        .catch(err => {
            console.log(err)
        })
    }

    
     
    useEffect(()=>{
        axios.post('http://smartex.lakecitypivotz.com/api/listCartData',{
            user_id:"23"
        })
        .then(res => {
            setData(res.data.DataInfo)
            setLists(data.cart)
        })
        .catch(err => {
            console.log(err)    
        })
    },[del])
    
    const Product = lists;
    

   
    const AddToOrder = async() => {
        await axios.post('http://smartex.lakecitypivotz.com/api/addToOrder',{
            customer_Id :"23",
            totel_amount:data.total_price,
            total_delivery_charge:data.total_delivery_charge,
            address_id:"17",
            net_price:data.net_price,
        })
        .then(res => {
            console.log(res.data,"AddToOrder")
            alert(res.data.message)
            navigation.navigate('ListOrder')
        })
        .catch(err => {
            console.log(err)
        })
    }

    const mrps = 0;


    return (
    <View style={{
        flex:1,
    }}>
        <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:9,
      }}>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => navigation.goBack()} />
        <Text style={Styles.Heading}>List Data</Text>
        <Ionicons name="person" size={30} color="black" onPress={() => navigation.navigate('Profile')} />
      </View>
      {
        lists != null ?
      <>
         <FlatList
            data={Product}
            renderItem={({item}) => (
                <View style={Styles.meal_card}>
                    <Image source={{uri:item.product_image}} style={styles.image}/>
                    <View style={{flexDirection:'column'}}>

                    <Text style={[Styles.meal_card_info,{color:Colors.black}]}>{item.product_name}</Text>
                    <Text style={[Styles.meal_card_info,{color:Colors.black}]}>X {item.quantity}</Text>
                    <Text style={[Styles.meal_card_info,{color:Colors.black}]}>Price: $ {item.totel_price}</Text>
                    
                   <TouchableOpacity style={styles.btn} onPress={() => del(item.cart_id)}>
                          <Text style={{color:Colors.snow}}>Remove</Text>
                   </TouchableOpacity>
                </View>
                </View>

            )}
            keyExtractor={item => item.rest_product_id}
            />
            
            <View style={styles.total}>
                <Text>Total Price : ${data === null ? mrps : data.net_price} </Text>
                <TouchableOpacity style={Styles.btn_bg} onPress={AddToOrder}>
                    <Text style={{color:Colors.black}}>Checkout</Text>
                </TouchableOpacity>
            </View>

            </>
       :(
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Text style={Styles.Heading}>Your Cart is Empty</Text> 
            <TouchableOpacity style={Styles.detail_show_btn} onPress={() => navigation.navigate('ListOrder')} >
                <Text style={{color:Colors.black}}>Check Your orders</Text>
            </TouchableOpacity>
        </View>
       )}
    </View>
  )
}

export default Cart_data

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100,
        resizeMode:'contain'
    },
    btn:{
        backgroundColor:Colors.black,
        padding:10,
        borderRadius:10,
        margin:10,
        alignItems:'center',
        justifyContent:'center'
    },
    total:{
        position:'absolute',
        bottom:0,
        backgroundColor:Colors.black,
        width:'100%',
        padding:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    }
})