import { StyleSheet, Text, View ,FlatList,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import shoplist from '../asset/data/shopslist'
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'


const Shoplist = () => {

  const navigation = useNavigation();

    const lists = ({item}) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate('Data',{
              item:item
            })}>

            <View style={{flexDirection:'row',backgroundColor:'green',marginHorizontal:6,padding:6,marginVertical:6}}>
                <Image source={item.img} style={{height:117,width:100}} />
                <View style={{margin:6}}>
                    <Text style={{color:'#eee',fontSize:18,fontWeight:'bold',marginHorizontal:6}}>{item.name}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        {/* <AntDesign name='star' size={19} style={{marginRight:4}} /> */}
                        <Text style={{color:'#eee',marginRight:6}}>{item.rating}</Text>
                        <Text style={{color:'#eee',marginHorizontal:6}}>{item.time}</Text>
                        <Text style={{color:'#eee',marginHorizontal:6}}>₹{item.offerprice}</Text>
                    </View>
                    <Text style={{color:'#eee',marginHorizontal:6}}>{item.type}</Text>
                    <Text style={{color:'#eee',marginHorizontal:6}}>{item.location}</Text>
                </View>

            </View>
            </TouchableOpacity>
        )
    }


  return (
    <View>
        <Text style={{color:'black',fontSize:20,fontWeight:'bold',marginHorizontal:9,padding:6}}>Our Top Brands</Text>
      <FlatList 
      data={shoplist}      
      renderItem={lists}
      />
    </View>
  )
}

export default Shoplist

const styles = StyleSheet.create({})