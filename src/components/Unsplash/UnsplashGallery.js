import React from 'react';
import {Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUnsplash} from '../../store/action-creater/changeUnsplash';
import ImageUnsplash from './ImageUnsplash';

import Config from 'react-native-config';
//const imageParams = "&w=500&h=100&dpr=2";
const imageParams = '&w=100&h=100&dpr=3';

const UnsplashGallery = ({navigation}) => {
  const unsplash = useSelector(state => state.unsplash);

  const dispatch = useDispatch();
  const dispathImages = fetchUnsplash(unsplash.pages);
  async function requestImages() {
    await dispathImages(dispatch);
  }

  if (unsplash.loading && unsplash.images.length < 1) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }
  if (unsplash.error) {
    return (
      <View>
        <Text>Error: {unsplash.error.toString()}</Text>
        <Button
          onPress={() => {
            navigation.push('Gallery');
          }}
          title="Get back"
        />
      </View>
    );
  }
  return (
    <View>
      <ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {unsplash.images.map(
            (image, index) =>
              image && (
                <View key={index}>
                  <TouchableOpacity
                    style={{width: 100, height: 100}}
                    onLongPress={() =>
                      navigation.navigate('Image', {
                        images: unsplash.images,
                        currentIndexProps: index,
                      })
                    }
                    underlayColor="white">
                    <ImageUnsplash
                      imageSrc={image.image + imageParams}
                      alt={image.alt}
                    />
                  </TouchableOpacity>
                  <Text numberOfLines={1} style={{width: 100}}>
                    {image.user}
                  </Text>
                </View>
              ),
          )}
        </View>
        <Button
          accessible
          onPress={requestImages}
          title="Load More"
          accessibilityLabel="Load more images for gallery"
        />
      </ScrollView>
    </View>
  );
};

export default UnsplashGallery;
