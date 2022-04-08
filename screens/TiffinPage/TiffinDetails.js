import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ActivityIndicator, Button, Colors, RadioButton } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import {Styles} from '../../components/Style/Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const TiffinDetails = ({route}) => {
    const {item} = route.params;
    const navigation = useNavigation();
    const [value, setValue] = useState('3');
    const [value1, setValue1] = useState('Lunch');
    const [price,setPrice] = useState();
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    const PhoneNumber = auth().currentUser.phoneNumber;
    
    const getData = async() => {

        await firestore()
        .collection('Users')
        .doc(PhoneNumber)
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
      // console.log(data);


   setTimeout(() => {
        Total();
        getData();
    }, );

    const Total = () => {
        if(value1 === 'Lunch' && value === '3'){
            setPrice(2000);
        }
        else if(value1 === 'Lunch' && value === '6'){
            setPrice(4000);
        }
        else if(value1 === 'Lunch' && value === '12'){
            setPrice(8000);
        }
        else if(value1 === 'Dinner' && value === '3'){
            setPrice(2000);
        }
        else if(value1 === 'Dinner' && value === '6'){
            setPrice(4000);
        }
        else if(value1 === 'Dinner' && value === '12'){
            setPrice(8000);
        }
        else if(value1 === 'Both' && value === '3'){
            setPrice(4000);
        }
        else if(value1 === 'Both' && value === '6'){
            setPrice(8000);
        }
        else if(value1 === 'Both' && value === '12'){
            setPrice(12000);
        }
        
    }


    const add = async() => {
        setLoading(true);
      const Address = data.Address;
      const Name = data.Firstname + " " + data.Lastname;
      const Pincode = data.Pincode;
      const Email = data.Email;
      const Name_of_Tiffin = item.name;
     
      await firestore()
      .collection('Tiffin_service')
      .doc(Email)
      .set({
        Months: value,
        Time: value1,
        price: price,
        Address: Address,
        Name: Name,
        Pincode: Pincode,
        Email: Email,
        Name_of_Tiffin_provider: Name_of_Tiffin,
      })
      .then(() => {
         navigation.navigate('TiffinPayment',{
         price:price
    });
    setLoading(false);
  })
  .catch(error => {
    console.log(error);
    alert('Error');
  })

    }


  return (
      <View style={Styles.container}>
     
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

        <ScrollView>
      <Image source={item.image} style={Styles.meal_img1}/>

        <View style={{margin:19}}>

          
            <Text style={Styles.Heading}>opening Hours</Text>
            <Text style={{color:'black',marginHorizontal:9}}>10:00 AM To 6:00 PM</Text>

          <Text style={Styles.Heading}>Lunch Menu</Text>
          <Text style={{color:'black'}}>{item.Lunch}</Text>

          <Text style={Styles.Heading}>Address</Text>
          <Text style={[Styles.Paragraph,{fontSize:15,width:'80%',margin:9}]}>17, FALGUN SOCIETY, B/H. A.G TEACHERS SCHOOL,COMMERCE, Swastik Cross Rd, Navrangpura, Ahmedabad, Gujarat 380009</Text>
      

        <Text style={Styles.Heading}>Select Month</Text>
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="3" />
        <Text style={Styles.Paragraph}>3 Months</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="6" />
        <Text style={Styles.Paragraph}>6 Months</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="12" />
        <Text style={Styles.Paragraph}>12 Months</Text>
      </View>
    </RadioButton.Group>
{/* {console.log(value)} */}


    <Text style={Styles.Heading}>Select Time</Text>
    
    <RadioButton.Group onValueChange={newVal => setValue1(newVal)} value={value1}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="Lunch"/>
        <Text style={Styles.Paragraph}>Lunch</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="Dinner" />
        <Text style={Styles.Paragraph}>Dinner</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="Both" />
        <Text style={Styles.Paragraph}>Both</Text>
      </View>
    </RadioButton.Group>


</View>

    <View style={Styles.TiffinTotal}>
        <Text style={{textAlign:'center'}}>Total Price : {price}</Text>
        <Button mode="contained" style={Styles.TiffinButton} onPress={() => add()}>
            Proceed to Payment
        </Button>
    </View>

    </ScrollView>
    <ActivityIndicator size="large" style={{position:'absolute',alignItems:'center',marginLeft:160,height:'100%'}} color={Colors.blueA700} animating={loading} />

    </View>
  );
};

export default TiffinDetails;

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    aligndatas:'center',
    justifyContent:'space-between',
    marginHorizontal:19,
    margin:19
   },
});
