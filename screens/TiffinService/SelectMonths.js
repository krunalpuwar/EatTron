import { StyleSheet, Text, View,TouchableOpacity,ImageBackground,FlatList} from 'react-native'
import React ,{useState} from 'react'
import bg from '../../asset/img/background.png'
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Data from '../../asset/data/Data' 

const SelectMonths = () => {
    const navigation = useNavigation();
    const [mon,setMon] = useState(null);

    const add = async() => {

        setMon()

        await firestore()
        .collection('TiffinService')
        .doc("Tiffin")
        .set({
            
            Months:mon
        })
        .then(() => {
          console.log('Product added!');
          navigation.navigate('SelectTime',{mon:mon});
        })
        .catch((e) => console.log("Problem"))
      }
      


  return (
    <ImageBackground source={bg} style={{flex:1,alignItems:'center'}}>

        <Text style={styles.heading}>Select Months</Text>
        <View>
            <FlatList
                data={Data}
                renderItem={({item}) => (<>
                    <TouchableOpacity style={styles.btn} onPress={add}>
                        <Text style={styles.month}>{item.months}</Text>
                    </TouchableOpacity>
            </>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    </ImageBackground>

  )
}

export default SelectMonths;

const styles = StyleSheet.create({
    heading:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:20,
        color:'#e9ebe8'

    },
    btn:{
        backgroundColor:'#34e056',
        width:300,
        height:120,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginVertical:40
    },
    month:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'

    }
})