import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image,TextInput } from 'react-native'
import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Colors } from '../../components/Style/Colors'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Data = () => {


 const [data,setData] = useState([]);
 const navigation = useNavigation();

  


  useEffect( async() => {
    await axios.post('http://smartex.lakecitypivotz.com/api/restaurantMenu',{
      restaurent_Id:"6"
    })
    .then(res => {
      setData(res.data.DataInfo[0].Product)
    })
    .catch(err => {
      console.log(err)
    })
  
  },[])

  const Product = data;

  return (

    <View style={styles.container}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:9,
      }}>
        <AntDesign name="arrowleft" size={30} color="black" onPress={() => navigation.goBack()} />
        <Text>List Data</Text>
        <AntDesign name="shoppingcart" size={30} color="black" onPress={() => navigation.navigate('Cart_data')} />
      </View>
      <FlatList
        data={Product}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View style={styles.image}>
              <Image source={{uri:item.product_image}} style={styles.image}/>
              </View>
              <View style={styles.text}>
                <Text style={{fontSize:20,color:Colors.black}}>{item.product_name}</Text>
                <Text style={{fontSize:20,color:Colors.black}}>$ {item.price}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Deatils_axi',{item: item})} >
                  <Text style={{color:Colors.snow}}>Details</Text>
                </TouchableOpacity>
                </View>
                </View>
        )}
        keyExtractor={item => item.product_id}
      />

    </View>
    
  )}

export default Data

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.snow    
  },
  card: {
    backgroundColor: Colors.snow,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  btn:{
    backgroundColor: Colors.green,
    borderRadius: 10,
    height:24,
    width:100,
    alignItems: 'center',
    justifyContent: 'center',

  },
})