import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import {Styles} from '../../components/Style/Style'
import AntDesign from 'react-native-vector-icons/AntDesign'

import { GooglePay } from 'react-native-google-pay';
const allowedCardNetworks = ['VISA', 'MASTERCARD'];

const Card = () => {

 async function Pay() {

  const allowedCardAuthMethods = ['PAN_ONLY', 'CRYPTOGRAM_3DS'];
 
const requestData = {
  cardPaymentMethod: {
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      // stripe (see Example):
      gateway: 'stripe',
      gatewayMerchantId: '',
      stripe: {
        publishableKey: 'pk_test_TYooMQauvdEDq54NiTphI7jx',
        version: '2018-11-08',
      },
      // other:
      gateway: 'example',
      gatewayMerchantId: 'exampleGatewayMerchantId',
    },
    allowedCardNetworks,
    allowedCardAuthMethods,
  },
  transaction: {
    totalPrice: '10',
    totalPriceStatus: 'FINAL',
    currencyCode: 'USD',
  },
  merchantName: 'Example Merchant',
};
 
// Set the environment before the payment request
GooglePay.setEnvironment(GooglePay.ENVIRONMENT_TEST);
 
// Check if Google Pay is available
GooglePay.isReadyToPay(allowedCardNetworks, allowedCardAuthMethods)
  .then((ready) => {
    if (ready) {
      // Request payment token
      GooglePay.requestPayment(requestData)
        .then((token) => {
          // Send a token to your payment gateway
          console.log(token);
        })
        .catch((error) => console.log(error.code, error.message));
    }
  })

 }



  return (
    <View>
      <Text style={{textAlign:'center'}}>Pay With Upi</Text>
      <TouchableOpacity style={[{justifyContent:'space-between'},Styles.meal_card]} onPress={() => Pay()}>
        <Image source={{
          uri:'https://www.apkmirror.com/wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.apkmirror.com%2Fwp-content%2Fuploads%2F2019%2F08%2F5d5498f9f3133.png&w=96&h=96&q=100'
        }} style={{
          width:60,
          height:60,
          borderRadius:50,
        }}/>
        <View style={Styles.meal_card_text}>
          <Text style={Styles.Paragraph}>UPI</Text>
          <Text style={Styles.Paragraph}>Pay with UPI</Text>
        </View>
        <AntDesign name="plus" size={20} color="blue" style={{
          borderWidth:0.6,
          borderColor:'blue',
          alignItems:'center',
        }} />
      </TouchableOpacity>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})