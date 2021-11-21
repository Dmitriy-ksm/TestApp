import {whileStatement} from '@babel/types';
import React, {useState, useEffect} from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import ImageUnsplash from './ImageUnsplash';

import ImagesStyle from '../../styles/images';

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
    <View style={ImagesStyle.mainImageLayout}>
      {takePrev && (
        <TouchableOpacity
          style={ImagesStyle.mainImageTouchableLeft}
          onPress={() => {
            setCurIndex(curIndex - 1);
          }}>
          <Text style={ImagesStyle.mainImageTouchableArrows}>{'<'}</Text>
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
          style={ImagesStyle.mainImageTouchableRight}
          onPress={() => {
            setCurIndex(curIndex + 1);
          }}>
          <Text style={ImagesStyle.mainImageTouchableArrows}>></Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageWrapper;
