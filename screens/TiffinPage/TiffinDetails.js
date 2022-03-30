import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, RadioButton } from 'react-native-paper';

import React,{useState,useEffect} from 'react';
import {Styles} from '../../components/Style/Style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import logo from '../../asset/img/person.png';
import {useNavigation} from '@react-navigation/native';

const TiffinDetails = ({route}) => {
    const {item} = route.params;
    const navigation = useNavigation();
    const [value, setValue] = useState('3');
    const [value1, setValue1] = useState('One');
    const [price,setPrice] = useState();


   setTimeout(() => {
        Total();
    }, );

    const Total = () => {
        if(value1 === 'One' && value === '3'){
            setPrice(2000);
        }
        else if(value1 === 'One' && value === '6'){
            setPrice(4000);
        }
        else if(value1 === 'One' && value === '12'){
            setPrice(8000);
        }
        else if(value1 === 'Two' && value === '3'){
            setPrice(2000);
        }
        else if(value1 === 'Two' && value === '6'){
            setPrice(4000);
        }
        else if(value1 === 'Two' && value === '12'){
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

  return (
      <View style={Styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          marginVertical: 6,
        }}>
        <View>
          <AntDesign
            name="left"
            size={29}
            color="black"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{marginHorizontal: 9}}
            onPress={() => navigation.navigate('Search')}>
            <AntDesign name="search1" size={29} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Image source={logo} style={{borderRadius: 20}} />
          </TouchableOpacity>
        </View>
      </View>
        <ScrollView>



      <Image source={item.image} style={Styles.meal_img1}/>

        <View style={{margin:19}}>
      
            <Text style={Styles.Heading}>opening Hours</Text>
            <Text style={{color:'black'}}>{item.opening}</Text>

    <Text style={Styles.Heading}>Lunch Menu</Text>
    <Text style={{color:'black'}}>{item.Lunch}</Text>


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
        <RadioButton value="One"/>
        <Text style={Styles.Paragraph}>Lunch</Text>
      </View>
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <RadioButton value="Two" />
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
        <Button mode="contained" style={Styles.TiffinButton} onPress={() => navigation.navigate('TiffinPayment',{
            price:price
        })}>
            Proceed to Payment
        </Button>
    </View>





    </ScrollView>
    </View>
  );
};

export default TiffinDetails;

const styles = StyleSheet.create({});
