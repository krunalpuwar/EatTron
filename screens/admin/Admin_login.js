import { StyleSheet, Text, View,TouchableOpacity,Dimensions} from 'react-native'
import React ,{useState} from 'react'
import { Colors } from '../../components/Style/Colors'
import { Styles } from '../../components/Style/Style'
import { TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Admin_login = () => {
    const navigation = useNavigation();
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');


    const login = () => {
     
        if(email == '' && password == ''){
            navigation.navigate('Admin_panel')
        }
        else if(email == 'kapuwar29@gmail.com' && password == '123456'){
            alert('Please Enter Email and Password')
        }
    }

  return (
    <View style={styles.container}>
      <Text style={[Styles.Heading,{textAlign:'center'}]}>Admin Login</Text>
      <View style={styles.textinputWrapper}>
      <TextInput style={styles.input} label='Email' value={email} onChangeText={
        (text) => setemail(text)
      } />
      <TextInput style={styles.input} label='Password' value={password} onChangeText={
        (text) => setpassword(text)
      } />
        <View style={styles.btn_container}>
            <TouchableOpacity style={styles.btn} onPress={login}>
                <Text style={styles.btn_txt}>Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.snow,
        justifyContent:'center'
    },
    textinputWrapper:{
        marginHorizontal:20,
    },
    input:{
        marginVertical:10,
        backgroundColor:Colors.snow,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:16,
        color:Colors.black
    },
    btn_container:{
        marginTop:19,
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        width:Width/1.5,
        height:Height/20,
        backgroundColor:Colors.black,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    btn_txt:{
        color:Colors.snow,
        fontSize:16,
        fontWeight:'bold'
    }
})

export default Admin_login