import React from 'react';
import {Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUnsplash} from '../../store/action-creator/changeUnsplash';
import ImageUnsplash from './ImageUnsplash';

import {SMALL_IMAGE_HEIGHT, SMALL_IMAGE_WIDTH} from '../../const/constants';

import ImagesStyle from '../../styles/images';

import Config from 'react-native-config';
const imageParams = `&w=${SMALL_IMAGE_WIDTH}&h=${SMALL_IMAGE_HEIGHT}&dpr=3`;

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
        <View style={ImagesStyle.galleryLayout}>
          {unsplash.images.map(
            (image, index) =>
              image && (
                <View key={index}>
                  <TouchableOpacity
                    style={ImagesStyle.galleryImageContainer}
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
                  <Text
                    numberOfLines={1}
                    style={ImagesStyle.galleryImageAuthorContainer}>
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
