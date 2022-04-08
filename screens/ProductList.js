import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { Product } from '../components/Product.js';
import bestseller, { getProducts } from '../asset/data/Bestseller';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../components/Style/Style.js';
import { Colors } from '../components/Style/Colors.js';
import categories from '../asset/data/categories.js';

export function ProductsList () {
    
    const navigation = useNavigation();
    const [currentSelected, setCurrentSelected] = useState([0]);
    const[datalist,setDatalist] = useState(bestseller)
    const[status,setStatus] = useState('All')



    const setStatusFilter = (status) => {
      if(status !== 'All'){
          setDatalist([...bestseller.filter(item => item.status === status)])
      }else{
          setDatalist(bestseller)
      }
      setStatus(status)
    }

    const DisplayCategories = ({item,index}) => {
        return(
          <>
            <TouchableOpacity 
               activeOpacity={0.9}
               onPress={() => {
                setCurrentSelected(index),
                setStatusFilter(item.status)
            }}
            key={index}> 
              <View style={[styles.Cat,{backgroundColor:currentSelected === index ? 'green' : 'white'}]} >
                <Image source={item.Img} style={styles.cat_img} />
                <Text style={[styles.cat_title,{color:currentSelected === index ? Colors.snow : 'black'}]}>{item.title}</Text>
              </View>
            </TouchableOpacity>
            </>
          )
        }

    
    function renderProduct({item: product}) {
        // console.log(product,"productList");
        return (
      <Product {...product} 
        onPress={() => {
            navigation.navigate('ProductDetails', {
            productId: product.id,
            });
            // console.log(product.item,"ProductList")
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
      <>
      <View style={{backgroundColor:Colors.snow}}>

      <Text style={Styles.Heading}>Categories</Text>
           <FlatList 
            data={categories}
            renderItem={DisplayCategories}
            keyExtractor={(item) => item.id}
            horizontal
            />
            
            {/*  */}

        <FlatList
          contentContainerStyle={styles.productsListContainer}
          keyExtractor={(item) => item.id}
          data={datalist}
          renderItem={renderProduct}
          />
      </View>
      </>
  );
}
const styles = StyleSheet.create({
  
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
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
});