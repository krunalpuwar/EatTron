import React ,{ useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import categories from '../asset/data/Categories';
import { Colors } from './Style/Colors';
 



export default function Categories() {

  const [currentSelected, setCurrentSelected] = useState([0]);

  const DisplayCategories = ({item,index}) => {
    return(
      <>
        <TouchableOpacity 
           activeOpacity={0.9}
           onPress={() => {
            setCurrentSelected(index)
        }}> 
          <View style={[styles.Cat,{backgroundColor:currentSelected === index ? 'green' : 'white'}]} >
            <Image source={item.Img} style={styles.cat_img} />
            <Text style={[styles.cat_title,{color:currentSelected === index ? Colors.snow : 'black'}]}>{item.title}</Text>
          </View>
        </TouchableOpacity>
        </>
      )
    }

    const Details = (data,index) => {
      return(
      
        <TouchableOpacity>
        <View style={styles.deals_main}>
          <View style={{
            justifyContent:'space-evenly'
          }}>
            <Text style={{color: 'black', fontSize: 20,fontWeight:'bold'}}>{data.title}</Text>
            <Text style={{color: 'black', fontSize: 14}}>{data.dec}</Text>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            ₹ {data.price}
            </Text>
          </View>

              <Image source={data.img} style={styles.deals_img} />
            
        </View>
      </TouchableOpacity>
      
        )}


  return (
    <View style={styles.categories_main}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginHorizontal:20}}>categories</Text>
          <View style={styles.listcatWrapper}>

          <FlatList 
            data={categories}
            renderItem={DisplayCategories}
            keyExtractor={(item) => item.id}
            horizontal
            />

            <View style={{marginTop:19}}>

              
              {categories[currentSelected].item.map(Details)}
              
            </View>
            <TouchableOpacity>

            <Text style={{
              
              color:'black',
              fontWeight:'bold',
              textAlign:'center'
            }} >Load More...</Text>
            </TouchableOpacity>
         </View>
      </View>
  )
}

const styles = StyleSheet.create({
  categories_main:{
    marginTop:30,
    height:'auto',
    width:'100%',
    marginBottom:10
    
    
  },
  listcatWrapper:{
    paddingTop:15, 
    paddingBottom:20,
    
 
  },
  Cat:{
            marginHorizontal:10,
            marginVertical:10,
            padding:20,
            flexDirection:'column',
            borderRadius:10,
            justifyContent:'center',
            alignItems:'center',
            width:90,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
    
  },
 
  cat_img:{
   resizeMode: 'cover',
   width: 30,
   height: 30,

  },
  cat_title:{
    marginTop:10,
     fontWeight:'bold',
     fontSize:10,
     
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