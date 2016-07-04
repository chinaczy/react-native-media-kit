'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window');

import {Video} from 'react-native-media-kit';

export default class App extends Component {

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#efefef'}}>

        <Video
          style={{width: width, height: width / (16/9), marginTop: 50, backgroundColor: 'black'}}
          autoplay={false}
          preload='none'
          loop={false}
          controls={true}
          src={'http://192.168.100.18:3000/videos/femme_tampon_tutorial.mp4'}
        />

        <Video
          style={{width: width, height: width / (16/9), marginTop: 50, backgroundColor: 'black'}}
          autoplay={false}
          preload='none'
          loop={false}
          controls={true}
          src={'http://192.168.100.18:3000/videos/Sarajevo%20in%204K.mp4'}
        />
      </ScrollView>
    );
  }
}