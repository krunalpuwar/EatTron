import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Styles } from '../../components/Style/Style';
import { Colors } from '../../components/Style/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Deatils_axi = ({route}) => {
    const navigation = useNavigation();

    const {item} = route.params;
  const [info ,setInfo] = useState([]);

  useEffect (()=>{
    log();
  } ,[])

    const log = () => {
      axios.post('http://smartex.lakecitypivotz.com/api/userLogin',{
        email: 'kapuwar29@gmail.com',
        password: '1234567890'
      })
      .then(res => {
        console.log(res.data.DataInfo)
        setInfo(res.data.DataInfo)
      })
      .catch(err => {
        console.log(err)
      })
    }


    const add = () => {
        axios.post('http://smartex.lakecitypivotz.com/api/addToCart',{
            product_id: item.rest_product_id,
            store_Id: item.restaurent_Id,
            type:"1",
            quantity: 1,
            price: item.price,
            user_id: info[0].customer_Id,
            special_request:"151dsfsdfdfdfdsfsfd"
        })
        .then(res => {
            // console.log(res.data)
            alert(res.data.message)
            navigation.navigate('Cart_data')
        })
        .catch(err => {
            console.log(err,"Error")
        })
    }
    

  return (
        <>        
    <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.goBack()}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>Details</Text>

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

        </View>

        <Image source={{
            uri: item.product_image   
        }}
        style={{
            height: 200,
            width: '100%',
            resizeMode: 'contain',
        }} />
        
        <Text style={[{textAlign:'center'},Styles.Heading]}>
            {item.product_name}
        </Text>
        <Text style={[{marginHorizontal:24},Styles.Paragraph]}>
            {item.description}
        </Text>

        <Text style={[{textAlign:'center'},Styles.Heading]}>
         Price:  $ {item.price}
        </Text>
        <TouchableOpacity style={Styles.addtocart} onPress={add}>
            <Text style={Styles.addtocart_txt}>Add To Cart</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default Deatils_axi

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.snow,
    },
    header: {
        flexDirection:'row',
        aligndatas:'center',
        justifyContent:'space-between',
        marginHorizontal:19,
        margin:19,
        backgroundColor:Colors.snow,
       },
})