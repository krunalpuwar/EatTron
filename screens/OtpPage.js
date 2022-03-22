import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import auth from '@react-native-firebase/auth';
  
  
  import main from '../asset/img/main.png';
  
  const OtpPage = ({navigation, route}) => {
    const {num} = route.params;
  
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
  
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
  
    
    useEffect(() => {
      signInWithPhoneNumber();
  
      const unsubscribe = auth().onAuthStateChanged(users => {
        if (users) {
          navigation.navigate('Home');
          setUser(users);
          if (initializing) setInitializing(false);
          console.log(user)
        }
      })
        return unsubscribe;
  
    }, []);
  
  
    async function signInWithPhoneNumber() {
      try {
        const confirmation = await auth().signInWithPhoneNumber(num);
        setConfirm(confirmation);
      } catch (e) {
        alert(e,"Error");
      }
    }
  
    async function confirmCode() {
      try {
        const res = await confirm.confirm(code);
        if (res) {
          navigation.navigate('Home');
        }
      } catch (error) {
        alert('Invalid code.');
      }
    }
  
    return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Image source={main} />
  
          <TextInput
            value={code}
            keyboardType="numeric"
            onChangeText={text => setCode(text)}
            style={{
              borderColor: '#5e92eb',
              width: '60%',
              color: 'black',
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              marginTop: 20,
              marginHorizontal: 20,
            }}
          />
          <TouchableOpacity style={{width: '60%'}} onPress={() => confirmCode()}>
            <Text
              style={{
                borderRadius: 6,
                backgroundColor: 'black',
                color: '#ebebeb',
                height: 30,
                padding: 6,
                textAlign: 'center',
                marginVertical: 30,
              }}>
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
    );
  };
  
  export default OtpPage;
  
  const styles = StyleSheet.create({});
  