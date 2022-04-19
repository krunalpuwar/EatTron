import { StyleSheet, Text, View,FlatList,Image} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Styles} from '../../components/Style/Style'

const ListOrder = () => {

    const [data ,setData] = useState([]);

    useEffect(()=>{
        axios.post('http://smartex.lakecitypivotz.com/api/listOrder',{
            customer_id:"23"
        })
        .then(res => {
            setData(res.data.DataInfo[0].order_detail)
        })
        .catch(err => {
            console.log(err)    
        })
    },[])
    
    const renderItem = ({item}) => {
        return(
            <View style={Styles.meal_card}>
                <Image source={{uri:item.product_image}} style={[{resizeMode:'contain'},Styles.meal_img]}/>
                <View style={{alignItems:'center',padding:9}}>
                    <Text style={Styles.meal_name}>{item.product_name}</Text>
                    <Text style={Styles.Paragraph}>Price: ₹{item.price}</Text>
                    <Text style={Styles.Paragraph}>Quantity: {item.quantity}</Text>
                </View>
            </View>
            )
        }
    
    const Product = data;
        console.log(Product,"Product")
        
  return (
    <View>
      <Text style={[{textAlign:'center'},Styles.Heading]}>ListOrder</Text>
      <FlatList
        data={Product}
        renderItem={renderItem}
        keyExtractor={item => item.order_id}
        />
    </View>
  )
}

export default ListOrder

const styles = StyleSheet.create({})