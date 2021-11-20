import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';

const ImageUnsplash = ({imageSrc, alt, currentIndex}) => {
  // const [ratio, setRatio] = useState(1);
  // useEffect(() => {
  //   if (imageSrc) {
  //     Image.getSize(imageSrc, (width, height) => {
  //       setRatio(width / height);
  //     });
  //   }
  // }, [imageSrc]);

  return (
    <Image
      //style={{width: '100%', height: undefined, aspectRatio: ratio}}
      style={{width: '100%', height: '100%', resizeMode: 'cover'}}
      accessible
      accessibilityLabel={alt}
      source={{
        uri: imageSrc,
      }}
    />
  );
};

export default ImageUnsplash;
