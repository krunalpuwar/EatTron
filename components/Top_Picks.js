import { StyleSheet, Text, View ,TouchableOpacity,Image,FlatList} from 'react-native'
import React from 'react'
import TopPicks from '../asset/data/Top_picks_for_you'

const Top_Picks = () => {

    const Top_Picks_data = ({item,index}) => {
        return (
          <TouchableOpacity style={styles.top_picks} key={index}>
            <Image source={item.Img} style={styles.top_picks_img} />
            <View style={styles.top_picks_info}>
              <Text style={styles.top_picks_title}>{item.title}</Text>
              <Text style={styles.top_picks_price}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        );
      };


    return (
    <View style={styles.Top_picks_wrapper}>
    <Text
      style={{
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginBottom: 6,
        textTransform:'uppercase'
      }}>
      <Image
        source={require('../asset/img/like.png')}
        style={{resizeMode: 'contain', width: 30, height: 30}}
      />
      Top Picks For You
    </Text>

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={TopPicks}
        renderItem={Top_Picks_data}
        keyExtractor={item => item.id}
      />
  </View>
  )
}

export default Top_Picks

const styles = StyleSheet.create({
    Top_picks_wrapper: {
        marginVertical: 20,
        backgroundColor: '#fff',
        height: 160,
        justifyContent: 'center',
      },
      top_picks_img: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
        margin: 10,
      },
      top_picks_info: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 300,
      },
      top_picks_title: {
        fontSize: 10,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 19,
        marginVertical: -16,
        width: 60,
        alignItems: 'center',
      },
      top_picks_price: {
        fontSize: 10,
        color: 'black',
        marginTop: 20,
        marginHorizontal: 19,
        alignItems: 'center',
      },
      Popular_curations_wrapper: {
        backgroundColor: '#fff',
        height: 300,
      },
      Popular_curations_Title: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 20,
      },
})