import { StyleSheet,Text,TextInput,View,Image,TouchableOpacity,Alert} from 'react-native';
import React, {useState,useEffect} from 'react';

import main from '../asset/img/main.png';
import auth from '@react-native-firebase/auth';


const Login = ({navigation}) => {
  const [num, setNum] = useState('+91');

  useEffect(() => {

    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    })
    return unsubscribe
  }, []);



  const getOtp = () => {
    if (num && num.length > 9) {
      navigation.navigate('OtpPage', {num: num})
    } else {
      Alert.alert('Please Enter 10 Digit Number');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={main} />

      <TextInput
        placeholder="Enter Your Phone Number"
        style={styles.input}
        value={num}
        onChangeText={text => setNum(text)}
        keyboardType="numeric"
        maxLength={13}
      />

      <TouchableOpacity style={styles.btn} onPress={getOtp}>
        <Text style={styles.btn_txt}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  heading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  input: {
    borderColor: '#5e92eb',
    width: '60%',
    color: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
  },
  btn: {
    width: '60%',
  },
  btn_txt: {
    borderRadius: 6,
    backgroundColor: 'black',
    color: '#ebebeb',
    height: 30,
    padding: 6,
    textAlign: 'center',
    marginVertical: 30,
  },
});
