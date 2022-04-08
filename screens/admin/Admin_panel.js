import { View, Text ,FlatList,Image,TouchableOpacity,StyleSheet} from 'react-native'
import React ,{useEffect,useState} from 'react'
import { Styles } from '../../components/Style/Style'
import firestore from '@react-native-firebase/firestore';
import { Colors } from '../../components/Style/Colors';
import  AntDesign from 'react-native-vector-icons/AntDesign';


const Admin_panel = () => {
 
    const [data, setdata] = useState(null);
    useEffect(() => {
        GetDetails();
    }, []);


    
    const GetDetails = async() => {
        const list = [];

        var snapshot = await firestore()
        .collection('Cart')
        .get();
  
      snapshot.forEach(doc => {
          for(var i = 0; i < doc.data().items.length; i++){
              list.push(doc.data().items[i]);
          }
        });
        setdata(list);
        console.log(list);
    }
 
        const showdata = ({item,index}) => {
            const product = item.product;
            {console.log(product)}
            return(
                <>
                <View key={index} style={Styles.meal_card}>
                    <Image source={product.image} style={[Styles.meal_img,{resizeMode:'contain'}]} />
                    <View style={{alignItems:'center'}}>
                    <Text style={Styles.Heading}>{product.title}</Text>
                    <Text style={Styles.Paragraph}>₹ {product.price}</Text>

                    <Text style={Styles.Paragraph}>{product.status}</Text>
                    <Text style={Styles.Paragraph}>X{item.qty}</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                    }}>
                        <TouchableOpacity onPress={() => {} }>
                            <AntDesign name="check" size={16} color={Colors.lightGreen} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <AntDesign name="delete" size={16} color={Colors.gray} />
                        </TouchableOpacity>

                    </View>

                </View>
                </>
            )    
        }

    return (
    <View style={Styles.container}>
      <Text style={[Styles.Heading,{textAlign:'center'}]}>Admin_panel</Text>

      <View style={{flexDirection:'row',justifyContent:'center'}}>

          <TouchableOpacity>
              <Text style={style.btn}>New Order</Text>
          </TouchableOpacity>

          <TouchableOpacity>
              <Text style={[style.btn,{backgroundColor:'rgba(0,0,0,0.1)'}]}>Completed Order</Text>
          </TouchableOpacity>


      </View>


            <FlatList 
            data={data}
            renderItem={showdata}
            keyExtractor={(index) => index.toString()}
            />

      <View>

      </View>
    </View>
  )
}

export default Admin_panel

const style = StyleSheet.create({
    btn:{
        padding:10,
        borderRadius:5,
        backgroundColor:Colors.lightGreen,
        margin:10,
        fontSize:12,
        fontWeight:'bold',
        color:Colors.black,
    }
})