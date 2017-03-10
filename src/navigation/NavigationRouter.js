import React, { Component } from 'react';
import { StyleSheet, View, Alert, ToastAndroid, BackAndroid  } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
// screens identified by the router

import Login from '../containers/Login';
import Register from '../containers/Register';
import styles from './style/NavigationStyle';
import {Fonts ,Metrics, Colors } from '../themes/index'
import I18n from '../i18n/I18n';
import { connect } from 'react-redux';

class NavigationRouter extends Component {

  constructor (props) {
    super(props);
    this.state = {
    }
  }

  onExitApp = () => {
    Alert.alert(
      I18n.t('exitApp'),
      null,
      [
        { text: I18n.t('cancel'), onPress: () => {} },
        { text: I18n.t('yes'), onPress: () => BackAndroid.exitApp() },
      ]
    );
    return true;
  }

  render () {
    return (
      <Router onExitApp={this.onExitApp} hideNavBar>
        <Scene key="root" hideNavBar={true}>
          <Scene initial={true} key="login" component={Login}/>
          <Scene key="register" component={Register} />
        </Scene>
      </Router>
    )
  }
}


// navBar={ (ref) => { return <NavBar left='home' right='fav-2' parrent={ref}/>}}
export default NavigationRouter