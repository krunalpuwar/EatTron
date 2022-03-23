import {
    StyleSheet,
    Text,
    FlatList,
    View,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
  import firestore from '@react-native-firebase/firestore';
//   import AntDesign from 'react-native-vector-icons/AntDesign';
  import CartData from '../components/CartData';
import { useNavigation } from '@react-navigation/native';
  
  const MyCart = () => {
    const [setdata, newdata] = useState(null);
    const navigation = useNavigation();

  
  
    const deletepost = ID => {
      console.log('Data ID IS: ' + ID);
  
      firestore()
        .collection('AddToCart')
        .doc(ID)
        .delete()
        .then(() => alert('Deleted'))
        .catch(console.log('Error'));
    };
  
    useEffect(() => {
      getInfo();
    }, []);
  
    const getInfo = async () => {
      await firestore()
        .collection('Users')
        .doc('Contact_details')
        .get()
        .then(snapshot => {
          if (snapshot.exists) {
            newdata(snapshot.data());
          } else {
            console.log('Data Not Found');
          }
        });
    };
  
    setTimeout(() => {
      GetData();
    }, 1000);
  
    const [Pro, setPro] = useState(null);
    
  
    const GetData = async () => {
      var list = [];
  
      var snapshot = await firestore()
        .collection('AddToCart')
        .orderBy('createdAt')
        .get();
  
      snapshot.forEach(doc => {
        const {ProductId, ProductImg, ProductName, ProductDec, ProductMrp} = doc.data();
        list.push({
          id: doc.id,
          ProductId: ProductId,
          ProductImg: ProductImg,
          ProductName: ProductName,
          ProductDec: ProductDec,
          ProductMrp: ProductMrp,
        });
      });
  
      setPro(list);
    };
  
    return (
      <>
      <View style={styles.container}>
        
          {Pro == null ? (
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20,
                color: 'green',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Your Cart Empty
            </Text>
          ) : (
            <>
            <ScrollView>
                  <FlatList
                    data={Pro}
                    renderItem={({item}) => (
                      <CartData item={item} onDelete={deletepost}  />
                    )}
                    keyExtractor={item => item.id}
                  />
          
        </ScrollView>

        <View style={{backgroundColor:'green',padding:9,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
          <Text style={{textAlign:'center'}}>
              Total Cart Value Is :  ₹ {Pro.reduce((acc, item) => acc + item.ProductMrp, 0)}
           </Text>
           <TouchableOpacity style={{backgroundColor:'black',padding:9}} onPress={() => navigation.navigate('Payment',{
             Pro:Pro
           })}>
            <Text style={{textAlign:'center'}}>Make Payment</Text>
            </TouchableOpacity>

        </View>

          
      </>
          )}
       </View>
    </>
    );
  };
  
  export default MyCart;
  
  const styles = StyleSheet.create({
    container:{
      height:'100%',
      flex:1
    },
    make_btn: {
      backgroundColor: 'yellow',
      padding: 9,
    },
    make_txt: {
      color: 'black',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
  });
  