import React ,{useState,useEffect} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
  } from 'react-native';

  // Components
  import { Styles } from '../components/Style/Style';
  import {Colors} from '../components/Style/Colors';

  // Icons
  import firestore from '@react-native-firebase/firestore';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

  import { CartContext } from '../CartContext'
  import {getProduct} from '../asset/data/categories'


  
  
  export default function Details({route, navigation}) {
    

    const { productId } = route.params;
    
    const [product, setProduct] = useState({});

    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
      setProduct(getProduct(productId));
    });

    function onAddToCart() {
      addItemToCart(product.id);
    }


  

    // const add = async() => {
  
    //       await firestore()
    //       .collection('AddToCart')
    //       .doc()
    //       .set({
    
    //           ProductId: Productid,
    //           ProductName:prodTitle,
    //           ProductDec:prodDec,
    //           ProductMrp:price,
    //           ProductRating:prodRating,
    //           ProductImg:prodImg,
    //           Count : count,
    //           createdAt:firestore.FieldValue.serverTimestamp()
    //       })
      

    //       .then(() => {
    //         console.log('Product added!');
    //         ToastAndroid.show('Your Data Added Successfully', ToastAndroid.SHORT);
    //         navigation.navigate('MyCart');
    //       })
    //       .catch((e) => console.log("Problem"))
    //     }
        
        // GET DATA
        
        
        // const getdata = async() => {
        //   await firestore()
        //   .collection('AddToCart')
        //   .get()
        //   .then(querySnapshot => {
        //     const data = querySnapshot.docs.map(doc => doc.data());
        //     setCdata(data);
        //   })
        //   .catch(e => console.log(e));
        // }


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

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={Styles.btn_bg}
          />

        </View>
  
        <Image source={data.img} style={Styles.Main_img} />

        {/* Price */}
          <View style={Styles.pri}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:9,textAlign:'center'}}>Current Price :</Text>
            <Text style={Styles.price}>₹ {price}</Text>
          </View>

            <View style={{flexDirection:'row',aligndatas:'center',justifyContent:'center'}}>
                
                <TouchableOpacity
                 style={Styles.count_btn_left}
                 onPress={() => {
                   if(count>1){
                    setCount(count-1)
                    setPrice(price-data.price)
                  }
                  else{
                    setCount(1)
                    alert(0)
                    setPrice(price)
                    
                  }
                }}
                >
                  <Text style={{color:Colors.snow,fontSize:19}}>-</Text>

                </TouchableOpacity>
                <View style={{backgroundColor:'#e810ab'}}>
                    <Text style={Styles.count_txt}>{count}</Text>
                </View>
                <TouchableOpacity 
                 style={Styles.count_btn_right}
                 onPress={() => {
                  setCount(count+1)
                  setPrice(price+data.price)
                  
                }}>
                  <Text style={{color:Colors.snow,fontSize:19}}>+</Text>
                </TouchableOpacity>
              </View>
  

                  <View style={{alignItems:'center',marginTop:-50,marginBottom:19}}>
                    <Text style={Styles.title}>{data.title}</Text>
                    <View style={{flexDirection:'row',aligndatas:'center'}}>
                    <Text style={Styles.sub_title}>{data.categories}</Text>
                    <FontAwesome5
                          name="pizza-slice"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                        />
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

                    {console.log(cdata)}

            {
              
              
              cdata.fill( pro => pro.ProductId == Productid )? (
            
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
                 ):
                 <Text style={{
                   color:'black',
                 }}> Data Nathi Joyleje </Text>
               
              }
            
           
        
              

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
      aligndatas:'center',
      justifyContent:'space-between',
      marginHorizontal:19,
      margin:19
     },
    });