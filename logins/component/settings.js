import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export default class logined extends Component {
  constructor(props) {
    super(props);
    this.state = {
      new_username: '',
      new_password: '',
      new_icon: '',
      list: [{key:['Taiki Kishiyama', '../../images/chat.jpg']}],
      listUpdate: 0, // 画面を再描画するためだけに使うstate
    };
  }
  onPress(event) {
    const tmp = this.state.list;
    if (this.state.new_username.length != 0) {
      tmp.push({ key: [this.state.new_username, this.state.new_icon]});
    }
    this.setState({
      list: tmp,
      listUpdate: this.state.listUpdate + 1 // list更新のタイミングでこっちも更新
    });
  }

  renderItem({ item }) {
    var timeInfo = new Date();
    timeInfo = timeInfo.getFullYear().toString() + '/' + (timeInfo.getMonth() + 1).toString() + '/' + timeInfo.getDate().toString();
    if (item.key == '') {
      Alert.alert('登録できません');
      return (null);
    } else {
      return (
          <View style={{
            margin: 0,
            paddingTop: 0,
            height: 70,
            borderBottomWidth: 1,
            borderColor: '#000000',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <View style={{
              margin: 2,
              marginLeft: 5,
              width: 52,
              borderWidth: 1,
              borderRadius: 2
            }}>
              <Image
                style={{
                  width: 48, height: 48
                }}
                source={
                  require('../../images/chat.jpg')
                  // require(item.key[1])
                  }
              />
            </View>
            <View style={{
              margin: 2,
              width: 300,
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 0,
            }}>
              <View style={{
                margin: 5,
                width: 180,
                borderWidth: 0,
                justifyContent: 'center'
              }}>
                <Text style={{
                  borderWidth: 0,
                  fontWeight: 'bold'
                }}>
                  {item.key[0]}
                </Text>
                <Text style={{
                  borderWidth: 0
                }}>
                  {timeInfo}
                </Text>
              </View>
              <View style={{
                marginLeft: 30,
                backgroundColor: '#FFFFFF',
                width: 50,
                height: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
                <TouchableOpacity onPress={Actions.chatRoom}>
                  <Text>削除</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      );
    }
  }  
  render() {
    return (
      <View style={{
        marginTop: 10,
      }}>
        {/* ユーザー名 */}
        < View style={{
          marginLeft: 50,
          marginRight: 50,
          paddingTop: 10,
          borderBottomWidth:1
        }}
        >
          <TextInput style={{
            height: 30,
            borderWidth: 0
          }}
            ref={(el) => { this.new_username = el; }}
            placeholder="  ユーザー名"
            onChangeText={
              (new_username) => this.setState({
                new_username : new_username
              })
            }
            value={
              this.state.new_username
            }
          />
        </View>
        {/* パスワード */}
        <View style={{
          marginLeft: 50,
          marginRight: 50,
          paddingTop: 10,
          borderBottomWidth: 1
        }}
        >
          <TextInput 　style={{
            height: 30,
            borderBottomColor: 'gray',
            borderWidth: 0,
          }}
            placeholder="  パスワード"
            ref={(el) => { this.new_password = el; }}
            onChangeText={
              (new_password) => this.setState({
                new_password:new_password
              })
            }
            value={
              this.state.new_password
            }
          />
        </View>
        {/* 画像URL */}
        <View style={{
          marginLeft: 50,
          marginRight: 50,
          paddingTop: 10,
          borderBottomWidth: 1
        }}
        >
          <TextInput style={{
            height: 30,
            borderBottomColor: 'gray',
            borderWidth: 0,
          }}
            placeholder="  画像のURL"
            ref={(el) => { this.new_icon = el; }}
            onChangeText={
              (new_icon) => this.setState({
                new_icon : new_icon
              })
            }
            value={
              this.state.new_icon
            }
          />
        </View>
        <View style={{
          backgroundColor: '#FFFFFF',//'#2EFEC8',
          marginLeft: 250,
          marginRight: 60,
          marginTop: 15,
          width: 50,
          height: 25,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        >
          {/* <TouchableOpacity onPress={this._onPressButton.bind(this)}> */}
          <TouchableOpacity onPress={this.onPress.bind(this)}>
            <Text>登録</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          marginTop: 70,
          height: 310,
          alignItems: 'center',
          borderWidth: 1
        }}>
            <FlatList data={this.state.list} execData={this.state.listUpdate} renderItem={this.renderItem} />
          </View>
      </View>
    );
  }
}