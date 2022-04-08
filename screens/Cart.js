import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Image} from 'react-native';
import { CartContext } from '../CartContext';
import {Styles} from '../components/Style/Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../components/Style/Colors';
import firestore from '@react-native-firebase/firestore';

export function Cart ({navigation}) {
const {items, removeItemFromCart,decreaseItemQuantity,getTotalPrice,increaseItemQuantity} = useContext(CartContext);


    let [total, setTotal] = useState(0);
    
    useEffect(() => {
      setTotal(getTotalPrice())
    });
    
    function remove(item) {
      removeItemFromCart(item.id);
      console.log("Remove", item.id);
    }
    
    function min(item){
      if(item.qty > 1){
      decreaseItemQuantity(item.id);
      }
      else{
        remove(item)
      }
    
      console.log("qty", item.qty);
    }
 
    function plus(item){
      if(item.qty < 10){
      increaseItemQuantity(item.id);
      }
      else{
        alert("Maximum 10")
      }
      console.log("qty", item.qty);
    }


    const add = async() => {

      await firestore()
      .collection('Cart')
      .add({
        items: items
        })
        .then(() => {
          console.log('success');
           navigation.navigate('PaymentCart',{
            total:total,
          });
        })
        .catch(error => {
          console.log(error);
          alert('Error');
        })
    }


function renderItem({item}) {

    return (

       <View style={styles.cartLine}>
          <Image style={styles.CartImg} source={item.product.image}/>
          <View>
          <Text style={styles.lineLeft}>{item.product.title}</Text>
          <Text style={styles.lineRight}>₹ {item.totalPrice}</Text>
          </View>
          <TouchableOpacity onPress={() => remove(item)} style={{
            position:'absolute',
            top:0,
            right:0,
            margin:-6,
            backgroundColor:Colors.snow,
            borderRadius:60
          }} >
            <AntDesign name="closecircle" size={16} color={Colors.black} />
          </TouchableOpacity>

            <View style={styles.counter}>
              <TouchableOpacity onPress={() => min(item)}>
                <AntDesign name="minus" size={12} color={Colors.snow} />
              </TouchableOpacity>

              <Text style={{backgroundColor:Colors.snow,marginHorizontal:6,color:Colors.black,paddingHorizontal:9,borderRadius:60}}>{item.qty}</Text>
              
              <TouchableOpacity onPress={() => plus(item)}>
                <AntDesign name="plus" size={12} color={Colors.snow} />
              </TouchableOpacity>
            </View>

       </View>
    );
  }

  return (
    <View style={{flex:1,backgroundColor:Colors.snow}}>

      <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>CART</Text>

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

        </View>

    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      />

{
  total == 0 ? (
    <Text style={[Styles.Heading,{position:'absolute',marginVertical:200,marginHorizontal:69}]}>Your Cart Is Empty</Text>
  ):
      (
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        backgroundColor:Colors.lightGreen,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
      }}>
        <Text style={Styles.Heading}>Total :<Text style={{fontWeight:'400'}}> ₹ {total}</Text></Text>
          <TouchableOpacity style={{backgroundColor:Colors.snow,padding:9,borderRadius:12}} onPress={() => add()}>
          <Text style={{fontSize:12,fontWeight:'bold',color:Colors.black}}>Checkout</Text>
        </TouchableOpacity>
      </View>
      )}
      </View>
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
    backgroundColor:'lightgreen',
    padding:10,
    justifyContent:'space-between',
    alignItems:'center',
    margin:9,
    borderRadius:10,
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,

  },
  CartImg:{
    width:80,
    height:80,
    resizeMode:'contain',
  },
  btn_remove:{
    backgroundColor:'red',
    padding:9,
    borderRadius:5,
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  header: {
    flexDirection:'row',
    aligndatas:'center',
    justifyContent:'space-between',
    marginHorizontal:19,
    margin:19
   },
  lineLeft: {
    fontSize: 16, 
    color:'#333333' 
  },
  lineRight: { 
    fontSize: 16, 
    fontWeight: 'bold',
    color:'#333333',
  },
  
  itemsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  counter:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'green', 
    height:'auto',
    width:'auto',
    paddingHorizontal:12,
    paddingVertical:4,
    borderRadius:12,
  }
});