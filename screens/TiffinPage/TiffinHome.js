import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { Searchbar, TextInput } from 'react-native-paper';
import { Styles } from '../../components/Style/Style';
import logo from '../../asset/img/person.png'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import meal_data from '../../asset/data/Meals_data';
import { Colors } from '../../components/Style/Colors';


const TiffinHome = () => {  
    const navigation = useNavigation();
    const [data,setData] = useState(meal_data);

    const searchdata = (text) => {
        if(text == ''){
            setData(meal_data);
        }else{
            const newdata = meal_data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
            setData(newdata);
        }
    }
    

  
    const CardData =  ({item,index}) => {
        return(
            <TouchableOpacity key={index} style={Styles.meal_card} onPress={() => navigation.navigate('TiffinDetails',{
                item: item,
              })}>
                <View>
                    <Image source={item.image} style={Styles.meal_img}/>
                </View>
                
                <View style={Styles.meal_card_info}>
                    <Text style={Styles.meal_name}>{item.name}</Text>
                    <Text style={Styles.meal_rating}>
                        <AntDesign name="star" size={15} color="grey"/>
                         {item.rating}</Text>
                    <Text style={Styles.meal_time}>
                        <AntDesign name="clockcircle" size={10} color="grey"/>
                          {item.time}</Text>
                    <Text style={Styles.meal_add}>
                        <AntDesign name="enviroment" size={10} color="grey"/>
                        {item.address}</Text>
                </View>

              </TouchableOpacity>

        )
    }


    return (
    <View style={Styles.container}>

        <View style={style.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>Tiffin Service</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <Image source={logo} style={Styles.logo}  />
            </TouchableOpacity>
          </View>

        {/* Header */}
        <View style={Styles.header}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:9,alignItems:'center'}}>
            {/* <Text style={Styles.Heading}>Eat-Tron</Text>  

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <Image source={logo} style={Styles.logo}  />
            </TouchableOpacity> */}

        </View>
           
            <View >
            <Searchbar
                placeholder="Search"
                onChangeText={(txt)=> {
                    searchdata(txt)
                }}
                placeholderTextColor='black'
                />
            </View>
        </View>


             <FlatList
                data={data}
                renderItem={CardData}
                keyExtractor={item => item.id}
            />







        </View>
  )
}

export default TiffinHome

const style = StyleSheet.create({
    header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor: Colors.lightGreen,
        padding:19,
       },
    })