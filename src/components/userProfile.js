// @flow

import React, { Component } from 'react';
import API from '../api';
import SearchBar from 'react-native-search-bar';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <SearchBar ref='searchBar'
                   placeholder={'Enter Github Username'}
                   onChangeText={userName => this.setState( { userName: userName } ) }
                   onSearchButtonPress={ () => this.getUserData() } />
        { this.renderUserProfile() }
      </View>
    )
  }

  getUserData() {
    this.refs['searchBar'].unFocus();

    API.fetchByUserName(this.state.userName)
      .then(response => {
        this.setState({ userData: response.data });
      })
      .catch(error => console.log(error))
  }

  renderUserProfile() {
    console.log(this.state);
    if(this.state.userData) {
      return (
        <View>
          <Image style={ styles.userImage } source={{ uri: this.state.userData.avatar_url }}/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  userNameInput: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  userImage: {
      width: 250,
      height: 250
  }
});

export default UserProfile