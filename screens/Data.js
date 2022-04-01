import { StyleSheet, Text, View,Image ,TouchableOpacity,FlatList,ScrollView,Dimensions} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import bestseller from '../asset/data/Bestseller';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Data = () => {

    
    const navigation = useNavigation();

    const DisplayDeals = ({item}) => {
        return (
          <>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  item: item,
                })
              }>
              <View style={styles.deals_main}>
                <View
                  style={{
                    margin: 10,
                    justifyContent: 'space-around',
                  }}>
                  <Text style={{color: 'black', fontSize: 20}}>{item.title}</Text>
                  <Text style={{color: 'black', fontSize: 14}}>{item.des}</Text>
                  <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  ₹ {item.mrp}
                  </Text>
                </View>
    
                <Image source={item.img} style={styles.deals_img} />
              </View>
            </TouchableOpacity>
          </>
        );
      };

  return (
   
   <View>
       <ScrollView showsVerticalScrollIndicator={false}>
    <FlatList
      data={bestseller}
      renderItem={DisplayDeals}
      keyExtractor={item => item.id}
      vertical
      />
      </ScrollView>
    </View>
  )
}

export default Data

const styles = StyleSheet.create({
    deals_img: {
        resizeMode: 'center',
        height: 70,
        width: 70,
        margin: 20,
      },
      deals_main: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 10,
        
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 10,

      },
      back_btn: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal:19,
        paddingVertical:6,
        backgroundColor:'green',
      },
})