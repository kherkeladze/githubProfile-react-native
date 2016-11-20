// @flow
import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Header = (props) => (
    <View style={ styles.headerView }>
      <Text style={ styles.headerText }>{ props.headerText }</Text>
    </View>
  );

const styles = StyleSheet.create({
  headerView: {
    height: 60,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderRadius: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    position: 'relative'
  },

  headerText: {
    fontSize: 20
  }
});

export default Header;