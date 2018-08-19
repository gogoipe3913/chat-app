import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';


export default class login extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginId: 'user', //初期アカウント
      loginPass: 'pass' //初期アカウント
    };
  }
  render() {
    return (
      <View style = {{
          marginTop: 80,
        }}>
        < View style = {{
          padding:50,
          paddingTop: 120,
          }} 
        >
          <TextInput style = {{
              height: 40,
              borderWidth: 0
            }}
            ref={(el) => { this.username = el; }}
            placeholder = "  ユーザー名,またはメールアドレス"
            onChangeText = {
              (username) => this.setState({
                username
              })
            }
            value = {
              this.state.username
            }
          />
        </View>
        <View style = {{
              padding: 50,
              paddingTop: 20
            }} 
        >
          <TextInput　style = {{
              height: 40,
              borderBottomColor: 'gray',
              borderWidth: 0,
            }}
            placeholder = "  パスワード"
            ref={(el) => { this.password = el; }}
            onChangeText = {
              (password) => this.setState({
                password
              })
            }
            value = {
              this.state.password
            }
          /> 
          </View>
          <View style = {{
              backgroundColor: '#FFFFFF',//'#2EFEC8',
              margin: 60,
              marginTop: 15,
              alignItems: 'center',
              borderRadius: 10
            }}
          >
          < Button onPress={Actions.chatRoom}
            title = "ログイン"
          />
          </View>
        </View>
    );
  }
  _onPressButton = (event) => {
    var username = this.state.username;
    var password = this.state.password;

    if (username == this.state.loginId && password == this.state.loginPass) {
      //ログイン画面へ遷移
      return(Actions.chatRoom);
    } else {
      Alert.alert('Id or Password is different!');
    }
  }
}