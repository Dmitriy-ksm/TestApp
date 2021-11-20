import {whileStatement} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

import ImageUnsplash from './ImageUnsplash';

const ImageWrapper = ({route, navigation}) => {
  const {images, currentIndexProps} = route.params;

  const [curIndex, setCurIndex] = useState();
  const [size, setSize] = useState({width: 0, height: 0});

  useEffect(() => {
    setCurIndex(currentIndexProps);
  }, []);

  console.log(curIndex);
  const takePrev = curIndex > 0;
  const takeNext = curIndex < images.length - 1;
  console.log(takePrev);
  const curImage = images[curIndex] ?? {image: '', alt: 'empty image'};

  const realImage = curImage.image != '';

  useEffect(() => {
    if (realImage)
      Image.getSize(curImage.image, (width, height) => {
        setSize({width: width, height: height});
      });
  }, [curIndex]);

  return (
    <View style={{flex: 1, height: '100%'}}>
      {takePrev && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            left: 10,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
          onPress={() => {
            setCurIndex(curIndex - 1);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}>
            {'<'}
          </Text>
        </TouchableOpacity>
      )}
      {realImage && (
        <ScrollView>
          <ScrollView horizontal={true}>
            <View style={{width: size.width, height: size.height}}>
              <ImageUnsplash imageSrc={curImage.image} alt={curImage.alt} />
            </View>
          </ScrollView>
        </ScrollView>
      )}

      {takeNext && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            height: '100%',
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
          onPress={() => {
            setCurIndex(curIndex + 1);
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}>
            >
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageWrapper;
