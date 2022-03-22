import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const CartData = ({item,index,onDelete}) => {

  const [count,setCount] = useState(1);
  const [price,setPrice] = useState(item.ProductMrp);
  

  return (
    <>
    <View key={index}>
    <View style={{backgroundColor:'green',flexDirection:'row',margin:6,marginTop:12,flexWrap:'wrap',padding:6}}>
      <Image source={item.ProductImg} style={{height:90,width:90}}/>
      <View style={{flexDirection:'column',marginLeft:10}}>
        <Text style={{fontSize:19,fontWeight:'bold'}}>{item.ProductName}</Text>
        <Text style={{fontSize:12,fontWeight:'bold'}}>{item.ProductDec.substr(0,40)}</Text>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:12}}>
           <Text style={{fontSize:12,fontWeight:'bold'}}>{item.ProductMrp}</Text>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                 style={styles.count_btn}
                 onPress={() => {
                   if(count>1){
                    setCount(count-1)
                    setPrice(price-item.ProductMrp)
                  }
                  else{
                    setCount(1)
                    alert(0)
                    setPrice(price)

                  }
                }}
                 >
                  <Text style={{color:"black"}}>-</Text>
                </TouchableOpacity>
                    <Text style={styles.count_btn}>{count}</Text>
                <TouchableOpacity 
                 style={styles.count_btn}
                 onPress={() => {
                  setCount(count+1)
                  setPrice(price+item.ProductMrp)

                }}>
                  <Text style={{color:'black'}}>+</Text>
                </TouchableOpacity>
              </View>
        </View>
        <TouchableOpacity style={{
          backgroundColor:'#f2f2f2',
          height:30,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:5,
          marginTop:10

        }}
        onPress={() => onDelete(item.id)}>
          <Text style={{fontSize:12,fontWeight:'bold',color:'green'}} >Remove</Text>
        </TouchableOpacity>
      </View>
    </View>

    </View>

        <View>
          <Text style={{textAlign:'center',color:'black'}}>
             Total Cart Value Is :  {price}
          </Text>
        </View>
      </>
  )
}

export default CartData;

const styles = StyleSheet.create({
  count_btn:{
    backgroundColor:'#f2f2f2',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:9,
    color:'black',
  }
})