import { StyleSheet, Text, View,FlatList,Image,ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Styles} from '../../components/Style/Style'
import { Colors } from '../../components/Style/Colors'

const ListOrder = () => {

    const [data ,setData] = useState([]);

    useEffect(()=>{
        axios.post('http://smartex.lakecitypivotz.com/api/listOrder',{
            customer_id:"23"
        })
        .then(res => {
            const lists = [];
            for(let i = 1 ; i < res.data.DataInfo.length; i++){
                lists.push(res.data.DataInfo[i])
            }
            setData(lists)
        })
        .catch(err => {
            console.log(err)    
        })
    },[])
    
   console.log(data,"Product")

    const renderItem = ({item}) => {
            const d = item.order_detail;
            return(
            <View style={Styles.meal_card}>
                <Image source={{uri:d[0].product_image}} style={[{resizeMode:'contain'},Styles.meal_img]}/>
                <View style={{alignItems:'center',padding:9}}>
                    <Text style={Styles.meal_name}>{d[0].product_name}</Text>
                    <Text style={Styles.Paragraph}>Price: ₹{d[0].price}</Text>
                    <Text style={Styles.Paragraph}>Quantity: {d[0].quantity}</Text>
                </View>
            </View>
            )
        }
    
    
        
  return (
    <View style={{flex:1,backgroundColor:Colors.snow}}>
      <Text style={[{textAlign:'center'},Styles.Heading]}>MyOrders</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.order_id}
        horizontal={false}
        />
    </View>
  )
}

export default ListOrder

const styles = StyleSheet.create({})