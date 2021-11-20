/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import configureStore from './src/store/configureStore';
import UnsplashGallery from './src/components/Unsplash/UnsplashGallery';
import ImageWrapper from './src/components/Unsplash/ImageWrapper';

const store = configureStore();

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <Provider store={store}>
    //   <SafeAreaView style={backgroundStyle}>
    //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

    //       <View
    //       //style={{alignItems:'center', width:100%}}
    //       >
    //         <Text h1>Gallery</Text>
    //       </View>
    //       <View
    //         style={{
    //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //         }}>
    //         <Text>TEST</Text>

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={UnsplashGallery} />
          <Stack.Screen name="Image" component={ImageWrapper} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    //        </View>
    //   </SafeAreaView>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
