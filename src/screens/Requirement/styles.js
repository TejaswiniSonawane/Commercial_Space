import {StyleSheet, Dimensions, Platform} from 'react-native';
import {colors} from '../../config/styles.js';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const window = Dimensions.get('window');

export default StyleSheet.create({
  scroller: {
    backgroundColor: '#fff',
    minHeight: '100%',
    width: window.width,
    // justifyContent: 'center',
  },
  subHeaderText: {
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  formInputView: {
    width: '100%',
    paddingHorizontal: 15,
    height: 80,
  },
  container: {
    backgroundColor: '#F5F5F5',
    minHeight: '100%',
    width: window.width,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    // borderRadius: 50,
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    marginTop: 15,
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
});
