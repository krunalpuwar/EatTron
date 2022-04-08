import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export function ProductItem({title, price, image, onPress}) {

    return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.thumb}
        source={image}
      />
      <View style={styles.infoContainer}>
          <View>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.price}>₹ {price}</Text>
          </View>
        <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text>View</Text>
            </TouchableOpacity>
        </View>
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
       width:'90%',
       marginHorizontal:19
  },
  thumb: {
    height: 190,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: '100%',
    resizeMode: 'contain',
    padding:9
  },
  infoContainer: {
    flexDirection:'row',
    padding: 16,
    justifyContent:'space-between',
    alignItems:'center',
},
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: 'black',
  },
  btn:{
    backgroundColor:'#ff5a60',
    padding:8,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',

  }
});