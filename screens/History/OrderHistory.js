import { StyleSheet, Text, View,Pressable } from 'react-native'
import React ,{useState,useEffect} from 'react'
import { Colors } from '../../components/Style/Colors';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Styles } from '../../components/Style/Style';

const phoneNumber = auth().currentUser.phoneNumber;

const OrderHistory = () => {
    const [show, setShow] = useState('flex');
    const [show1, setShow1] = useState('none');
    const [user, setUser] = useState([]);
    const [data,setData] = useState([]);

    const email = user.Email;
    // console.log(email);
    
    setTimeout(() => {
        usersData(),
        getTiffinDetails()
    },);
    

    const usersData = async() => {
        await firestore()
        .collection('Users')
        .doc(phoneNumber)
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
            <View style={{backgroundColor:Colors.gray}}>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Pressable style={{backgroundColor:Colors.gray,padding:9,margin:9}} onPress={() => {
              setShow('none')
                setShow1('flex')
        }}>
            <Text>Fast Food</Text>
          </Pressable>

          <Pressable style={{backgroundColor:Colors.lightGreen,padding:9,margin:9}}
          onPress={() => {
            setShow('flex')
              setShow1('none')
      }}>
            <Text>Tiffin</Text>
          </Pressable>

          </View>

          <View style={{display:show,backgroundColor:'blue',height:'100%',width:'100%'}}>

             <View style={{flexDirection:'column',backgroundColor:Colors.snow,justifyContent:'center'}}>
                <Text style={Styles.Heading}>{data.Name_of_Tiffin_provider}</Text>
                <Text style={Styles.Paragraph}>     Duration: {data.Months}Months</Text>
                <Text style={Styles.Heading}>₹ {data.price}</Text>
                <Text style={Styles.Paragraph}>Type: {data.Time}</Text>
                <Text style={Styles.Paragraph}>Address: {data.Address}</Text>
                <Text style={Styles.Paragraph}>Pincode: {data.Pincode}</Text>
                {data.createdAt}

              </View>

          </View>

          <View style={{display:show1,backgroundColor:'green',height:'100%',width:'100%'}}>
              
          </View>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})