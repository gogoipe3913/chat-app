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


var timeInfo = new Date();
export default class logined extends Component {
  constructor(props) {
    contents = '';    
    super(props);
    this.state = {
        tweet: '',
        list: [],
        listUpdate: 0, // 画面を再描画するためだけに使うstate
    };
  }   
  
  onPress(event) {
    const tmp = this.state.list;
    if (this.state.tweet.length != 0){
      tmp.push({ key: this.state.tweet });
    }
    this.setState({
      list: tmp,
      listUpdate: this.state.listUpdate + 1 // list更新のタイミングでこっちも更新
    });
  }

  renderItem({ item }) {
    var timeInfo = new Date();
    timeInfo = timeInfo.getFullYear().toString() + '/' + (timeInfo.getMonth() + 1).toString() + '/' + timeInfo.getDate().toString() + '  ' + timeInfo.getHours().toString() + ':' + timeInfo.getMinutes().toString();
    if (item.key == ''){
      Alert.alert('ツイート内容がありません');
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
          
        }}>
          <View style={{
            margin: 2,
            marginLeft: 5,
            width: 52,
            borderWidth: 0,
            borderRadius: 2
          }}>
            <Image
              style={{
                width: 48, height: 48
              }}
              source={
                require('../../images/chat.jpg')
              }
            />
          </View>
          <View style={{
            margin: 2,
            width: 300,
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderWidth: 0,
          }}>
            <View style={{
              marginBottom: 2,
              width: 300,
              borderWidth: 0,
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
              <Text style={{
                width: 130,
                borderWidth: 0,
                fontWeight: 'bold'
              }}>
                Taiki Kishiyama
              </Text>
              <Text style={{
                marginLeft: 10,
                width: 140,
                borderWidth: 0,
                justifyContent: 'flex-end'
              }}>
                {timeInfo}
              </Text>
            </View> 
            <View style ={{
              width:120,
              borderWidth:0
            }}>  
              <Text style={{
                width:120 
              }}>
                {item.key}
              </Text>
            </View>
            <View style ={{
              marginLeft:50,
              width:50,
              height:25,
              backgroundColor:'#00BFFF',
              alignItems:'center',
              justifyContent:'center',
              borderRadius:10
            }}> 
              <TouchableOpacity style ={{alignItems:'center'}}>
                <Text style={{
                  color: 'white',
                  fontSize: 15
                }}>
                  削除
                </Text>
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
        flex: 1
      }}>
        {/* 投稿フォーム */}
        <View style={{
          margin: 0,
          paddingTop: 30,
          height: 130,
          borderBottomWidth: 1,
          borderColor: '#000000',
          flexDirection: 'row',
          flexWrap: 'wrap', // or nowrap
        }}>
          <View style={{
            margin: 2,
            marginLeft: 10,
            width: 52,
            borderWidth: 0,
            borderRadius: 2
          }}>
            <Image
              style={{
                width: 48, height: 48
              }}
              source={
                require('../../images/chat.jpg')
              }

            />
          </View>
          <TextInput style={{
            width: 250,
            borderWidth: 1,
            margin: 2,
            height: 50,
            width: 300,
          }}
            ref={(el) => { this.contents = el; }}
            placeholder=" 今どうしてる?"
            onChangeText={
              (tweet) => this.setState({
                tweet: tweet
              })
            }
            value={
              this.state.tweet
            }
          />
          <View style={{
            width: 260,
          }}>
          </View>
          <View style={{
            marginTop: 10,
            backgroundColor: '#00BFFF',
            width: 70,
            height: 25,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
            <TouchableOpacity onPress={this.onPress.bind(this)} >
              <Text style={{
                color: 'white',
                fontSize: 15
              }}>
                ツイート
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ツイート一覧 */}
        
        <View style={{
          margin: 0,
          height: 420,
          borderWidth: 1,
          borderColor: '#000000',
          alignItems: 'center'
        }}>
          {/* execDataを追加 */}
          <FlatList data={this.state.list} execData={this.state.listUpdate} renderItem={this.renderItem} />
          
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  itemContainer: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    margin: 5,
  },
});