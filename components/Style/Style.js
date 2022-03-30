import {StyleSheet} from 'react-native';
import { Colors } from './Colors';

export const Styles = StyleSheet.create({

    Heading:{
        fontSize:19,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:Colors.black,
        padding:9
    },
    Paragraph:{
        fontSize:12,
        fontWeight:'400',
        color:Colors.black
    },
    container:{
      flex:1,
      backgroundColor:Colors.snow,

    },

    //Details Page Css 

    pri:{
        position:'absolute',
        backgroundColor:Colors.snow,
        top:0,
        right:0,
        width:100,
        marginTop:120,
        borderRadius:50,
        padding:9,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      Main_img: {
        height: 290,
        width: '100%',
        resizeMode: 'center',
        borderRadius: 200,
      },
     
      title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: 60,
        color: 'black',
        marginVertical: 10,
        textTransform:'uppercase'
      },
      sub_title:{
        fontSize: 19,
        fontWeight: '500',
        color: 'grey',
        marginRight:12,
      },
      desc_details: {
        marginVertical: 10,
        fontSize: 16,
        color: 'black',
      },
      price_rating_wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
      },
      price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign:'center'
      },
      rating: {
        color: 'black',
        marginBottom: 10,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      addtocart: {
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        flexDirection:'row',
        backgroundColor: '#6e34d1',
        justifyContent: 'space-around',
        borderRadius: 20,
        padding:9,
        width:'60%',
        alignItems: 'center',
        marginHorizontal:80,
        marginBottom:19,
      },
      remove:{
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        flexDirection:'row',
        backgroundColor: '#eb0c0c',
        justifyContent: 'space-around',
        borderRadius: 20,
        padding:9,
        width:'60%',
        alignItems: 'center',
        marginHorizontal:80,
        marginBottom:19,
      },
      addtocart_txt: {
        color: '#fff',
        fontWeight: 'bold',
      },
      header: {
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'space-between',
       marginHorizontal:19,
       margin:19
      },
      count_btn_left:{
        backgroundColor:'#e810ab',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:9,
        color:'black',
        paddingHorizontal:19,
        paddingVertical:9,
        borderTopStartRadius:50,
        borderBottomStartRadius:50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  
  
      },
      count_btn_right:{
        backgroundColor:'#e810ab',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:9,
        color:'black',
        paddingHorizontal:19,
        paddingVertical:9,
        borderTopEndRadius:50,
        borderBottomEndRadius:50,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      count_txt:{
        backgroundColor:Colors.snow,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:9,
        color:'black',
        paddingHorizontal:19,
        paddingVertical:12,
        
        borderRadius:60
  
      },
      btn_bg:{
        backgroundColor:Colors.snow,
        padding:9,
        borderRadius:60,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      Details_show:{
            color:'grey',
            fontSize:29
      },
      detail_show_btn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.snow,
        borderRadius:40,
        height:'auto',
        width:'auto',
        padding:19,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
  
      txt_main:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:15
      },
      txt_lower:{
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:12
      },

      //TiffinHome
      header:{
        height:'auto',
        width:'100%',
        padding:9,
        flexDirection:'column',
        justifyContent:'space-between',
        paddingHorizontal:19,
        backgroundColor:Colors.lightGreen,
      },
      logo:{
        borderRadius:20,
      },
      main_heading:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        margin:20,
    },
    meal_card:{
        height:'auto',
        width:'90%',
        backgroundColor:Colors.snow, 
        marginHorizontal:20,
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    meal_img:{
        height:100,
        width:100,

    },
    meal_card_info:{
        marginLeft:10,
        justifyContent:'space-around',
        alignItems:'flex-start'
    
    },
    meal_name:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',

    },
    meal_add:{
        fontSize:12,
        color:'black',

    },
    meal_rating:{
        fontSize:12,
        color:'black',
    },
     meal_time:{
        fontSize:12,
        color:'black',
},
meal_img1:{
  width:'90%',
  height:200,
  marginVertical:10,
  marginHorizontal:20,
  alignItems:'center',
  justifyContent:'center',
},
TiffinTotal:{
  height:'auto',
  width:'100%',
  backgroundColor:Colors.lightGreen,
  padding:10,
  flexDirection:'row',
  marginVertical:10,
  alignItems:'center',
  justifyContent:'space-between'
}

});