import {StyleSheet, Dimensions,Platform} from 'react-native';
import {colors} from '../../config/styles.js';

const window = Dimensions.get('window');

export default StyleSheet.create({
  amenitiesWrapper : {
    // backgroundColor: "#ff0",
  },
  container:{
    backgroundColor:'#f00',
    padding:0,
    margin:0,
    paddingTop:0,
    marginTop:0,
    ...Platform.select({
      ios:{
         height: 100 ,
          paddingTop:25,
      },
      android : {
      }
    }),
    borderBottomColor: colors.black,
    borderBottomWidth: 0,
    height: 60,
    // elevation: 2
  },
});

