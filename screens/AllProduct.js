import { StyleSheet, Text,TouchableOpacity, View ,Image,FlatList,ScrollView} from 'react-native'
import React ,{useState} from 'react'
import { Colors } from '../components/Style/Colors'
import bestseller from '../asset/data/Bestseller'
import { useNavigation } from '@react-navigation/native'
import {Styles} from '../components/Style/Style'
import AntDesign from 'react-native-vector-icons/AntDesign'

const listTab =[
    {
        status:'All'
    },
    {
        status:'burger'
    },
    {
        status:'chinese'
    },
    {
        status:'Pizza'
    },
    {
        status:'Italian'
    },
    {
        status:'Italian'
    },
    {
        status:'Italian'
    },
]

const AllProduct = () => {

    const navigation = useNavigation();

    const[status,setStatus] = useState('All')
    const[datalist,setDatalist] = useState(bestseller)

    const setStatusFilter = (status) => {
        if(status !== 'All'){
            setDatalist([...bestseller.filter(item => item.status === status)])
        }else{
            setDatalist(bestseller)
        }
        setStatus(status)
    }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails',{
                        productId: item.id,
                      })}>
                      <View style={styles.deals_main}>
                        <View style={{
                          justifyContent:'space-evenly'
                        }}>
                          <Text style={{color: 'black', fontSize: 20,fontWeight:'bold'}}>{item.title}</Text>
                          <Text style={{color: 'black', fontSize: 14}}>{item.des}</Text>
                          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                          ₹ {item.price}
                          </Text>
                        </View>
              
                            <Image source={item.image} style={styles.deals_img} />
                          
                      </View>
                    </TouchableOpacity>
     
     )} 

  return (
    <View style={styles.container}>

        <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>All Food</Text>

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />
        </View>


         <ScrollView horizontal>
     <View style={styles.listTab}>
        {
            listTab.map(e => (

                <TouchableOpacity 
                    style={[styles.btnTab,status === e.status && styles.btnActive]}
                    onPress={() => setStatusFilter(e.status)}
                    >
                    <Text style={styles.txtTab}>{e.status}</Text>
                </TouchableOpacity>
            ))
            
        }
     </View>
        </ScrollView>

     <FlatList 
        data={datalist}
        keyExtractor={(e,i) => i.toString()}
        renderItem={renderItem}
    />
    </View>
  )
}

export default AllProduct

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.snow,

    },
    listTab:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:9,
        margin:19,
        height:40,
        width:'100%',


    },
    header: {
        flexDirection:'row',
        aligndatas:'center',
        justifyContent:'space-between',
        marginHorizontal:19,
        margin:19
       },
    btnTab:{
        padding:9,
        borderWidth:1,
        borderColor:Colors.black,
        backgroundColor:Colors.snow,
        width:100,
        marginHorizontal:4
    },
    btnActive:{
        backgroundColor:Colors.lightGreen,
    },
    txtTab:{
        fontSize:12,
        color:Colors.black,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center',

    },
    deals_img: {
        resizeMode: 'contain',
        height:90 ,
        width: 90,
      
      },
      deals_main: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 9,
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,
    
      },
})