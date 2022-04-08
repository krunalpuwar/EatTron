import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Product } from '../components/Product.js';
import { getProducts} from '../asset/data/categories';
import { useNavigation } from '@react-navigation/native';
import { Styles } from '../components/Style/Style.js';
import { Colors } from '../components/Style/Colors.js';
import { ProductItem } from '../components/ProductItem.js';


export function ProductItems ({route}) {

    const navigation = useNavigation();
    
  const { productId ,productIte} = route.params;
  
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProducts(productIte.item));
  },[]);

  console.log(product,"productItems_update");

  return (
      <>
      <View style={{backgroundColor:Colors.snow}}>

      <Text style={Styles.Heading}>Menu</Text>
          <View>
                <Text style={Styles.Heading}>{product.title}</Text>
          </View>
      </View>
      </>
  );
}
const styles = StyleSheet.create({
  
  productsListContainer: {
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});