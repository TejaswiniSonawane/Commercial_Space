import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../../config/styles.js';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const window = Dimensions.get('window');

export default StyleSheet.create({
  buttonText: {
    color: colors.buttonText,
    // borderRadius: 50,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: 5,
    ...Platform.select({
      ios: {
        justifyContent: 'center',
      },
      android: {
        justifyContent: 'center',
      },
    }),
  },
  button1: {
    width: '100%',
    backgroundColor: '#f00',
    height: 45,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  TextWithIcon: {
    flexDirection: 'row',
    marginVertical: 15,
  },
});
