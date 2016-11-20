// @flow

import { AppRegistry, View } from 'react-native';
import React, { Component } from 'react';

import { Header, UserProfile } from './src/components';

const App = () => (
  <View>
    <Header headerText={'Github Profiles'}/>
    <UserProfile />
  </View>
);

AppRegistry.registerComponent('githubProfile', () => App );