import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function Product({title, price, image, onPress}) {

    return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.price}>₹ {price}</Text>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text>Details</Text>
            </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
       marginVertical: 20,
       marginHorizontal:19,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       padding:19
  },
  thumb: {
    height: 90,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width:90,
    resizeMode: 'contain',
    padding:9
  },
  infoContainer: {
    flexDirection:'column',
    width:'auto',
    alignItems:'flex-start',


},
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3c4560',
    flexWrap:'wrap'
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#b9c1d2',
  },
  btn:{
    backgroundColor:'#ff5a60',
    padding:8,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    height:'auto',
    width:70,


  }
});