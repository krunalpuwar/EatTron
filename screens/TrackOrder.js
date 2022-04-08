import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React ,{useState,useEffect} from 'react'
import logo from '../asset/img/person.png'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Styles } from '../components/Style/Style'
import { Colors } from '../components/Style/Colors'
import { useNavigation } from '@react-navigation/native'
import RatingModal from '../components/RatingModal'
import { ActivityIndicator } from 'react-native-paper'

const TrackOrder = () => {
    const navigation = useNavigation();
    useEffect(() => {
    
      mod();

    },[])
    
    const mod = () => {
    setTimeout(() => {
        <ActivityIndicator animating={true} color={Colors.primary} size={'large'} />
        alert('Thank you for your feedback')
        },8000)
      }
    
  return (
        <>
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>Track Order</Text>

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

        </View>
    <View style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor:Colors.snow
    }}>
{/*  */}
      <View style={{
          backgroundColor:'green',
            justifyContent:'center',
            height:'60%',
            width:'90%',

      }}>

      </View>
      {/*  */}
      <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',marginTop:19}}>
          <Image  source={logo} style={{height:60,width:60,borderRadius:90}}/>
          <View style={{alignItems:'center'}}>
              <Text style={Styles.Heading}>Bansil Patel</Text>
              <Text style={{color:'grey'}}>#0000-0000</Text>
          </View>
          <View style={{backgroundColor:'blue',height:60,width:60,borderRadius:90,alignItems:'center',justifyContent:'center'}}>
                <EvilIcons name='location' size={30} color='white' />
          </View>
      </View>

      {/* Lorem */}
      <View style={{width:'90%',marginTop:19}}>
      <Text style={{color:'black'}}>
        Lorem Ipsum is simply dummy with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </Text>
      </View>

      {/* BTN */}

      <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'90%',marginTop:40}}>
          <TouchableOpacity style={{backgroundColor:Colors.gray,width:120,height:40,justifyContent:'center',borderRadius:9}}>
              <Text style={{textAlign:'center',fontWeight:'bold'}}>Cancle</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor:Colors.lightGreen,width:120,height:40,justifyContent:'center',borderRadius:9}}>
              <Text style={{textAlign:'center',fontWeight:'bold'}}>Call</Text>
          </TouchableOpacity>
      </View>
    </View>
  
    </>
  )
}

export default TrackOrder

const styles = StyleSheet.create({
    // container:{
    //         backgroundColor:Colors.snow
    // },
    header: {
        flexDirection:'row',
        aligndatas:'center',
        justifyContent:'space-between',
        padding:19,
        backgroundColor:Colors.snow
       },
})