import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import ImagesStyle from '../../styles/images';

const ImageUnsplash = ({imageSrc, alt, currentIndex}) => {
  return (
    <Image
      style={ImagesStyle.image}
      accessible
      accessibilityLabel={alt}
      source={{
        uri: imageSrc,
      }}
    />
  );
};

export default ImageUnsplash;
