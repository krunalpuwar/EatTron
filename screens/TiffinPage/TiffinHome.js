import { StyleSheet, Text, View,Image,TouchableOpacity,FlatList} from 'react-native'
import React,{useState} from 'react'
import { Searchbar } from 'react-native-paper';
import { Styles } from '../../components/Style/Style';
import logo from '../../asset/img/person.png'
import { useNavigation } from '@react-navigation/native'
import AntDesign from "react-native-vector-icons/AntDesign"
import meal_data from '../../asset/data/Meals_data';

const TiffinHome = () => {
  
    const navigation = useNavigation();
    const[search,setSearch] = useState('');
  
    const CardData =  ({item}) => {
        return(
            <TouchableOpacity style={Styles.meal_card} onPress={() => navigation.navigate('TiffinDetails',{
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
        {/* Header */}
        <View style={Styles.header}>
         <View style={{flexDirection:'row',justifyContent:'space-between',padding:9,alignItems:'center'}}>
            <Text style={Styles.Heading}>Eat-Tron</Text>  

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
             <Image source={logo} style={Styles.logo}  />
            </TouchableOpacity>

        </View>
           
            <View >
            <Searchbar
                placeholder="Search"
                value={search}
                onChangeText={txt => setSearch(txt)}
                placeholderTextColor='black'
                />
            </View>
        </View>


            <FlatList
            data={meal_data}
            renderItem={CardData}
            keyExtractor={item => item.id}

            />







        </View>
  )
}

export default TiffinHome
