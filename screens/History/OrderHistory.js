import { StyleSheet, Text, View,Pressable } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors } from '../../components/Style/Colors';
import firestore from '@react-native-firebase/firestore';
import { Styles } from '../../components/Style/Style';


const OrderHistory = () => {
    const [show, setShow] = useState('flex');
    const [show1, setShow1] = useState('none');
    const [user, setUser] = useState([]);
    const [data,setData] = useState([]);
    const [cartData,setCartData] = useState([]);

    const email = user.Email;
    // console.log(email);

    useEffect(() => {
        getTiffinDetails()
    }, []);
    
    setTimeout(() => {
        usersData(),
        getTiffinDetails()
    }, 1000);
    

    const usersData = async() => {
        await firestore()
        .collection('Users')
        .doc()
        .get()
        .then(doc => {
            if(doc.exists){
                setUser(doc.data())
            }
        })
        .catch(error => {
            console.log(error);
        });
      }
      
      const getTiffinDetails = async() => {
        await firestore()
         .collection('Tiffin_service')
         .doc(email)
         .get()
         .then(doc => {  
                if(doc.exists){
                    setData(doc.data());
                }
            })
            .catch(error => {
                console.log(error);
            });
        }

      


        
        
        return (
            <View>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
          {/* Tiffin */}
          <Pressable style={{backgroundColor:Colors.lightGreen,padding:9,margin:9}}
          onPress={() => {
            setShow('flex')
              setShow1('none')
      }}>
            <Text>Tiffin</Text>
          </Pressable>

          {/* Fast Food */}

          <Pressable style={{backgroundColor:Colors.gray,padding:9,margin:9}} onPress={() => {
              setShow('none')
                setShow1('flex')
        }}>
            <Text>Fast Food</Text>
          </Pressable>


          </View>

          <View style={{display:show,height:'100%',width:'100%'}}>

             <View style={styles.card}>
                <Text style={Styles.Heading}>{data.Tiffin_provider}</Text>
                <Text style={Styles.Paragraph}>Duration: {data.Months} Months</Text>
                <Text style={Styles.Paragraph}>₹ {data.price}</Text>
                <Text style={Styles.Paragraph}>Type: {data.Time}</Text>
                <Text style={Styles.Paragraph}>Address: {data.Address}</Text>
                <Text style={Styles.Paragraph}>Pincode: {data.Pincode}</Text>
               <Text style={Styles.Paragraph}>Booked Date: {data.createdAt}</Text> 

              </View>

          </View>

            {/* Fast Food Card */}
          <View style={{display:show1,height:'100%',width:'100%'}}>

          <View style={styles.card}>
                {console.log(cartData)}
          </View>
              
          </View>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({
    card:{
        marginTop:9,
        height:'auto',
        width:'90%',
        backgroundColor:Colors.snow, 
        marginHorizontal:20,
        padding:19,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})