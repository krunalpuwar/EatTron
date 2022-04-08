import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  StyleSheet,
  TouchableOpacity
  } from 'react-native';
import { getProduct } from '../asset/data/Bestseller';
import { CartContext } from '../CartContext'
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { CartIcon } from '../components/CartIcon';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../components/Style/Style';
import { Colors } from '../components/Style/Colors';

export function ProductDetails({route}) {

    const navigation = useNavigation();

  const { productId } = route.params;
  
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  },[]);

  function onAddToCart() {
    addItemToCart(product.id);
  }
//   console.log(product,"productDetails");
 

return (
      <View style={{flex:1,backgroundColor:Colors.snow}}>
        
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>Details</Text>

         <CartIcon navigation={navigation} />

        </View>

        <Image source={product.image} style={Styles.Main_img} />

         {/* Price */}
         <View style={Styles.pri}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:9,textAlign:'center'}}>Current Price :</Text>
            <Text style={Styles.price}>₹ {product.price}</Text>
          </View>



          <View style={{alignItems:'center',marginTop:-50,marginBottom:19}}>
                    <Text style={Styles.title}>{product.title}</Text>
                    <View style={{flexDirection:'row',aligndatas:'center'}}>
                    
                    <Text style={Styles.sub_title}>{product.status}</Text>
                    </View>
                 </View>
                   
                   
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',aligndatas:'center'}}>
                      <View style={Styles.detail_show_btn}>
                        <Ionicons
                          name="alarm"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                          style={Styles.Details_show}
                        />
                          <View>
                            <Text style={Styles.txt_main}>15-20 min</Text>
                            <Text style={Styles.txt_lower}>Delivery</Text>

                          </View>
                      </View>

                      <View style={Styles.detail_show_btn}>

                      <Fontisto
                          name="fire"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                          style={Styles.Details_show}
                        />

                          <View>
                            <Text style={Styles.txt_main}>435 Kcal</Text>
                            <Text style={Styles.txt_lower}>Calories</Text>
                          </View>

                      </View>
                  </View>

                  <TouchableOpacity onPress={onAddToCart} style={Styles.addtocart}>
                  <SimpleLineIcons
                      name="handbag"
                      size={19}
                      color='black'
                      style={Styles.btn_bg}
                      />
                  <Text style={Styles.addtocart_txt}>Add To Cart</Text>
                  <AntDesign
                      name="right"
                      size={19}
                      color='black'
                      />
                </TouchableOpacity>
        
      </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },

    elevation: 1,
    marginVertical: 20,
  },
  header: {
    flexDirection:'row',
    aligndatas:'center',
    justifyContent:'space-between',
    marginHorizontal:19,
    margin:19
   },
  image: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: 'black',

  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginBottom: 16,   
   
  },
});