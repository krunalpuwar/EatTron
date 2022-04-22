import React, {useState} from 'react';
import slider from '../asset/data/slider';
import {StyleSheet,View,ScrollView,Image,Text,Dimensions} from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Slider = () => {
  
  const [img, setImg] = useState(0);
  
  const onChange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.WIDTH,
      )
      if (slide !== img) {
        setImg(slide);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          onScroll={({nativeEvent}) => {
            onChange(nativeEvent);
          }}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={[styles.wrap]}>
          {slider.map((e, index) => {
            return <Image key={index} style={[styles.img,{ marginHorizontal:img == index ? 0 : 10 }]} source={e.imgs} />
          })}
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            width: '100%',
          }}>
          {slider.map((e, index) => {
            return (
              <Text
                key={e}
                style={img == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default Slider;

const styles = StyleSheet.create({
  container: {
    marginTop:19
  },
  img: {
    resizeMode: 'cover',
    width: WIDTH - 19,
    height:HEIGHT/3.5,
    borderRadius: 19,
  },

  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    color: 'white',
    margin: 3,
  },
});
