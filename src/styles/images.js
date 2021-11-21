import React from 'react';
import {StyleSheet} from 'react-native';

import {SMALL_IMAGE_HEIGHT, SMALL_IMAGE_WIDTH} from '../const/constants';

const mainImageTouchable = StyleSheet.create({
  position: 'absolute',
  top: 0,
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
});

const ImagesStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  mainImageTouchableLeft: [mainImageTouchable, {left: 0}],

  mainImageTouchableRight: [mainImageTouchable, {right: 0}],

  mainImageTouchableArrows: {
    color: 'white',
    fontSize: 50,
  },
  mainImageLayout: {
    flex: 1,
    height: '100%',
  },

  galleryLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  galleryImageContainer: {
    width: SMALL_IMAGE_WIDTH,
    height: SMALL_IMAGE_HEIGHT,
  },
  galleryImageAuthorContainer: {
    width: SMALL_IMAGE_WIDTH,
  },
});

export default ImagesStyle;
