import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';


import chatRoom from './component/chatRoom.js';
import settings from './component/settings.js';
import logOut from './component/logOut.js';
import login from './login.js';
import TabIcon from './tabIcon';

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#2EFEC8',
  },
});

const scenes = Actions.create(
    <Scene key="root">
      <Scene key="login" initial component={login} title="login" /> 
      <Scene
        key="tabbar" tabs
        tabBarStyle={styles.tabBar}
      >
      <Scene key="chatRoom" component={chatRoom} title="chatRoom" icon={TabIcon} />
      <Scene key="settings" component={settings} title="settings" icon={TabIcon} />
      <Scene key="logOut" component={logOut} title="logOut" icon={TabIcon} />
      </Scene>
    </Scene>
);

class App extends React.Component {
  render() {
    return <Router scenes={scenes} />
  }
}

export default App;