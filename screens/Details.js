import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ToastAndroid,
  } from 'react-native';
  import React ,{useState} from 'react';
  import firestore from '@react-native-firebase/firestore';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



  
  
  export default function Details({route, navigation}) {

    const {item} = route.params;
    
    const ProductId = item.id;
    const prodTitle = item.title;
    const prodDec = item.dec;
    const prodMrp = item.mrp;
    const prodRating = item.rating;
    const prodImg = item.img;
    
    const [count,setCount] = useState(1);
    const [price,setPrice] = useState(prodMrp);
    const [click,setClick] = useState(false);

 
    const add = async() => {
  
          await firestore()
          .collection('AddToCart')
          .doc()
          .set({
            ProductId: ProductId,
            ProductName:prodTitle,
            ProductDec:prodDec,
            ProductMrp:price,
            ProductRating:prodRating,
            ProductImg:prodImg,
            createdAt:firestore.FieldValue.serverTimestamp()
          })
          .then(() => {
            console.log('Product added!');
            ToastAndroid.show('Your Data Added Successfully', ToastAndroid.SHORT);
            setClick(true);
          })
          .catch((e) => console.log("Problem"))
        }
        const remove = (ID) => {
          
          console.log('Data ID IS: ' + ID);
          
          firestore()
          .collection('AddToCart')
          .doc(ID)
          
          .delete()
          .then(() => alert('Deleted'),
             setClick(false)
          )
        .catch(console.log('Error'));

        }
  
    return (
      <View style={{flex:1,backgroundColor:'rgb(255,255,255)'}}>
        <View style={styles.header}>
          <AntDesign
            name="left"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={styles.btn_bg}
          />

          <Text style={{color:'black',fontSize:19,fontWeight:'bold'}}>Details</Text>

          <AntDesign
            name="sharealt"
            size={19}
            color='black'
            onPress={() => navigation.navigate('Home')}
            style={styles.btn_bg}
          />

        </View>
  
        <Image source={item.img} style={styles.Main_img} />

        {/* Price */}
          <View style={styles.pri}>
            <Text style={{color:'black',fontWeight:'bold',fontSize:9,textAlign:'center'}}>Current Price :</Text>
            <Text style={styles.price}>₹ {price}</Text>
          </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                
                <TouchableOpacity
                 style={styles.count_btn_left}
                 onPress={() => {
                   if(count>1){
                    setCount(count-1)
                    setPrice(price-item.mrp)
                  }
                  else{
                    setCount(1)
                    alert(0)
                    setPrice(price)
                    
                  }
                }}
                >
                  <Text style={{color:'rgb(255,255,255)',fontSize:19}}>-</Text>

                </TouchableOpacity>
                    <Text style={[styles.count_txt]}>{count}</Text>
                <TouchableOpacity 
                 style={styles.count_btn_right}
                 onPress={() => {
                  setCount(count+1)
                  setPrice(price+item.mrp)
                  
                }}>
                  <Text style={{color:'rgb(255,255,255)',fontSize:19}}>+</Text>
                </TouchableOpacity>
              </View>


                  <View style={{alignItems:'center',marginTop:-50,marginBottom:19}}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.sub_title}>{item.categories}</Text>
                    <FontAwesome5
                          name="pizza-slice"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                 </View>
                   
                   
                   
                    {/* BTN */}
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                      <View style={styles.detail_show_btn}>
                        <Ionicons
                          name="alarm"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                          style={styles.Details_show}
                        />
                          <View>
                            <Text style={styles.txt_main}>15-20 min</Text>
                            <Text style={styles.txt_lower}>Delivery</Text>

                          </View>
                      </View>

                      <View style={styles.detail_show_btn}>

                      <Fontisto
                          name="fire"
                          size={19}
                          color='black'
                          onPress={() => navigation.navigate('Home')}
                          style={styles.Details_show}
                        />

                          <View>
                            <Text style={styles.txt_main}>15-20 min</Text>
                            <Text style={styles.txt_lower}>Delivery</Text>
                          </View>

                      </View>
                  </View>

                  {
              click == false ?
           

            <TouchableOpacity onPress={add} style={styles.addtocart}>
                <SimpleLineIcons
                  name="handbag"
                  size={19}
                  color='black'
                  onPress={() => navigation.navigate('Home')}
                  style={styles.btn_bg}
                />
              <Text style={styles.addtocart_txt}>Add To Cart</Text>
              <AntDesign
                  name="right"
                  size={19}
                  color='black'
                  onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => remove(item.id)} style={styles.remove}>
                <AntDesign
                  name="delete"
                  size={19}
                  color='black'
                  onPress={() => navigation.navigate('Home')}
                  style={styles.btn_bg}
                />
              <Text style={styles.addtocart_txt}>Remove</Text>
              <AntDesign
                  name="right"
                  size={19}
                  color='black'
                  onPress={() => navigation.navigate('Home')}
                />
            </TouchableOpacity>
            
            }



{/*         
        <View style={styles.main_wrapper}>
          <View style={{marginHorizontal: 20}}>
        
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc_details}>{item.dec}</Text>
  
            <View style={styles.price_rating_wrapper}>
              <Text style={styles.price}>₹ {price}</Text>
              <Text style={styles.rating}>
                <AntDesign name="star" size={20} color="black" />
                {item.rating}
              </Text>

              

            </View>
           
            
          </View>
        </View> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    btn: {
      color: 'black',
      width: 60,
      backgroundColor: '#5e92eb',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      borderRadius: 20,
    },
    pri:{
      position:'absolute',
      backgroundColor:'rgb(255,255,255)',
      top:0,
      right:0,
      width:100,
      marginTop:120,
      borderRadius:50,
      padding:9,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    Main_img: {
      height: 290,
      width: '100%',
      resizeMode: 'center',
      borderRadius: 200,
    },
   
    title: {
      fontSize: 27,
      fontWeight: 'bold',
      marginTop: 60,
      color: 'black',
      marginVertical: 10,
    },
    sub_title:{
      fontSize: 19,
      fontWeight: '500',
      color: 'grey',
      marginRight:12,
    },
    desc_details: {
      marginVertical: 10,
      fontSize: 16,
      color: 'black',
    },
    price_rating_wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 20,
      alignItems: 'center',
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign:'center'
    },
    rating: {
      color: 'black',
      marginBottom: 10,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    addtocart: {
      position:'absolute',
      bottom:0,
      right:0,
      left:0,
      flexDirection:'row',
      backgroundColor: '#6e34d1',
      justifyContent: 'space-around',
      borderRadius: 20,
      padding:9,
      width:'60%',
      alignItems: 'center',
      marginHorizontal:80,
      marginBottom:19,
    },
    remove:{
      position:'absolute',
      bottom:0,
      right:0,
      left:0,
      flexDirection:'row',
      backgroundColor: '#eb0c0c',
      justifyContent: 'space-around',
      borderRadius: 20,
      padding:9,
      width:'60%',
      alignItems: 'center',
      marginHorizontal:80,
      marginBottom:19,
    },
    addtocart_txt: {
      color: '#fff',
      fontWeight: 'bold',
    },
    header: {
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     marginHorizontal:19,
     margin:19
    },
    count_btn_left:{
      backgroundColor:'#e810ab',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:9,
      color:'black',
      paddingHorizontal:19,
      paddingVertical:9,
      borderTopStartRadius:50,
      borderBottomStartRadius:50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,


    },
    count_btn_right:{
      backgroundColor:'#e810ab',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:9,
      color:'black',
      paddingHorizontal:19,
      paddingVertical:9,
      borderTopEndRadius:50,
      borderBottomEndRadius:50,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    count_txt:{
      backgroundColor:'rgb(255,255,255)',
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal:9,
      color:'black',
      paddingHorizontal:19,
      paddingVertical:12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    },
    btn_bg:{
      backgroundColor:'rgb(255,255,255)',
      padding:9,
      borderRadius:60,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    Details_show:{
          color:'grey',
          fontSize:29
    },
    detail_show_btn:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'rgb(255,255,255)',
      borderRadius:40,
      height:'auto',
      width:'auto',
      padding:19,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    txt_main:{
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:15
    },
    txt_lower:{
      color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:12
    }
  });
  