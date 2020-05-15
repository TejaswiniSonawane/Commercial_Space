import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {NavigationActions} from 'react-navigation';
import styles from './styles.js';
import {AppText} from '../AppText.js';
// import {useNavigation} from '../../hooks/'

export const HeaderBar = props => {
  const {openDrawer} = props.navigation;
  const title = props.scene?.descriptor?.options?.title;
  return (
    <Header
      placement="left"
      leftComponent={
        <View style={{flexDirection: 'row', cursor: 'pointer'}}>
          <TouchableOpacity style={{width: 40}} onPress={() => openDrawer()}>
            <Icon
              size={24}
              name="menu"
              type="material-community"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      }
      centerComponent={
        <TouchableOpacity onPress={() => {}}>
          <AppText type={['bold', 'white', 'large']}>{title ?? ''}</AppText>
        </TouchableOpacity>
      }
      containerStyle={styles.container}
    />
  );
};
