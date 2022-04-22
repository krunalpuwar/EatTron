import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React ,{useState,useEffect} from 'react'
import logo from '../asset/img/person.png'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Styles } from '../components/Style/Style'
import { Colors } from '../components/Style/Colors'
import { useNavigation } from '@react-navigation/native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const TrackOrder = () => {
    const navigation = useNavigation();
    
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
    <View style={styles.container}>
      
<View style={styles.card}>

    <MapView
       provider={PROVIDER_GOOGLE} 
       style={styles.map}
       region={{
         latitude: 23.0225,
         longitude: 72.5714,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
        }}
        >
      </MapView>

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
    container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor:Colors.snow
    },
    header: {
        flexDirection:'row',
        aligndatas:'center',
        justifyContent:'space-between',
        padding:19,
        backgroundColor:Colors.snow
       },
       card:{
        width:'90%',
        height:'60%',
        borderRadius:12
      },
      map:{
        width:'100%',
        height:'100%',
      }
})