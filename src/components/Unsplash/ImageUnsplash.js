import React from 'react';
import {Image, Text, View} from 'react-native';

const ImageUnsplash = ({imageSrc, alt, currentIndex}) => {
  return (
    <Image
      style={{width: '100%', height: '100%'}}
      accessible
      accessibilityLabel={alt}
      source={{
        uri: imageSrc,
      }}
    />
  );
};

export default ImageUnsplash;
