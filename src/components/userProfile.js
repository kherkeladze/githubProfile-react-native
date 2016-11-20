// @flow

import React, { Component } from 'react';
import API from '../api';
import SearchBar from 'react-native-search-bar';
import Icon from 'react-native-vector-icons/FontAwesome';


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
                   onChangeText={ userName => this.setState( { userName: userName } ) }
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
        <View style={ styles.userProfileView }>
          <Image style={ styles.userImage } source={{ uri: this.state.userData.avatar_url }}/>
          <Text style={ styles.userFullName }>{ this.state.userData.name.toUpperCase() }</Text>
          <Text> { this.state.userData.bio } </Text>

            <Text>
              <Icon name="map-marker" size={ 15 } color="#000" /> { this.state.userData.location }
            </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  userNameInput: {
    height: 20,
    borderColor: 'gray'

  },
  userProfileView: {
    alignItems: 'center',
    paddingTop: 10
  },
  userImage: {
      width: 160,
      height: 160,
      borderRadius: 80
  },
  userFullName: {
    padding: 10,
    fontSize: 20,
    fontFamily: 'Apple SD Gothic Neo',
    fontWeight: '800'
  }
});

export default UserProfile