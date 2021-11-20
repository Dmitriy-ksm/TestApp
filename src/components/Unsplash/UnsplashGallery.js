import React, {useState} from 'react';
import {Text, View, Button, TouchableHighlight, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUnsplash} from '../../store/action-creater/changeUnsplash';
import ImageUnsplash from './ImageUnsplash';

import Config from 'react-native-config';
//const imageParams = "&w=500&h=100&dpr=2";
const imageParams = '&w=100&h=100&dpr=3';

const UnsplashGallery = () => {
  const unsplash = useSelector(state => state.unsplash);

  const dispatch = useDispatch();
  const dispathImages = fetchUnsplash(unsplash.pages);
  async function requestImages() {
    await dispathImages(dispatch);
  }

  if (unsplash.loading) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  //   if (unsplash.error) {
  //     return (
  //       <View>
  //         <Text>Error: {unsplash.error.toString()}</Text>
  //       </View>
  //     );
  //   }
  return (
    <View>
      <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {unsplash.images.map((image, index) => (
          <View key={index} style={{margin: 2}}>
            <TouchableHighlight
              style={{width: 100, height: 100}}
              onLongPress={() => console.log(index)}>
              <ImageUnsplash
                imageSrc={image.image + imageParams}
                alt={image.alt}
              />
            </TouchableHighlight>
            <Text>{image.user}</Text>
          </View>
        ))}
      </View>
      <Button
        accessible
        onPress={requestImages}
        title="Load More"
        accessibilityLabel="Load more images for gallery"
      />
    </View>
  );
};

export default UnsplashGallery;
