import { StyleSheet, Dimensions,Platform }  from 'react-native';
// import { colors }                           from '../../config/styles.js';
import { isIphoneX }                        from 'react-native-iphone-x-helper';
import { getStatusBarHeight }               from 'react-native-iphone-x-helper';

const window = Dimensions.get('window');

export default StyleSheet.create({
  container:{
    backgroundColor: '#f00',
    // minHeight:'50%',
    // maxHeight:'57%',
    flex:1,
    flexDirection: 'column',
    width: window.width,
    justifyContent:"center",
    alignItems: "center",
  },
  Logo:{
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 100,
  },
  ProjectName:{
    textAlign: "center",
    color:'#fff',
    fontSize: 24,
    backgroundColor: 'transparent',
    padding:10,
    paddingBottom: 50,
    fontWeight: 'normal',
  },
  page:{
    backgroundColor: '#F5F5F5',
    flex:3,
    width: window.width,
    flexDirection: 'column',
  },
  scroller:{
    backgroundColor: '#fff',
    minHeight:'100%',
    width: window.width,
    justifyContent:"center"
  },
  listingBlock:{
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  sepBlock:{
    flexGrow: 1,
    flexDirection:'column',
    backgroundColor:'#F5F5F5',
    justifyContent: "center",
    alignItems: "center",
    marginBottom:7,
  },
  sepBlockImg:{
    width: 30,
    height: 30,
    marginTop:30,
  },
  listLable:{
    paddingTop:10,
    paddingBottom: 10,
  },
  searchLabel:{
    fontSize: 28,
    color: '#000000',
    paddingTop: 15,
  },
  searchView:{
    paddingLeft:10,
    paddingRight: 10,
    // backgroundColor: '#f0f',
  },
  buttonText:{
    color:'#fff',
  },
  button:{
    backgroundColor:'#f00',
    textAlign:'center',
    padding: 13,
    margin: 10,
  },
  propertyLabel:{
    fontSize: 32,
    textAlign:'left',
    // fontWeight: "bold",
  },
  propertyView:{
    marginTop:50,
    marginBottom:30,
    marginLeft:10,
    marginRight:10,
    // backgroundColor:'#f0f',
  },
  propBlock:{
    backgroundColor:'#fff',
    borderColor:'#D3D3D3',
    borderRadius: 5,
    borderWidth: 1,
    marginTop:10,
    marginBottom:10,
    elevation:2,
    shadowColor: '#787878',
    shadowOpacity: 1.0,
    shadowRadius:3,
    shadowOffset: { width: 0, height: -8 },
  },
  propertyImg:{
    height: 150,
    width: '100%',
  },
  propertyName:{
    fontSize:18,
    textAlign:'center',
  },
  propertyAdd:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  propAction:{
    backgroundColor:'#E8E8E8',
    borderWidth: 1,
    borderColor:'#A9A9A9',
    width: 45,
  },
  propAboutLabel:{
    color:'#666',
    fontSize: 16,
    fontWeight: "bold",
  }
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: colors.layoutColor,
//     height: 400,
//     borderBottomLeftRadius : 20,
//     borderBottomRightRadius : 20,
//   },
//   modalView:{
//       paddingVertical:20,
//       backgroundColor:'#fff',
//       marginTop:15, 
//       borderBottomWidth: 0,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.8,
//       shadowRadius: 2,
//       elevation: 1,
//       borderRadius:10,
//       margin:15
//   },
//   buttonText:{
//     color: colors.buttonText,
//     borderRadius:50,
//     fontFamily:"Montserrat-Regular",
//   },
//   buttonText1:{
//     color: colors.buttonText1,
//     borderRadius:50,
//     fontFamily:"Montserrat-Regular",
//   },
//   buttonContainer:{
//     marginTop:15,
//     ...Platform.select({
//       ios:{
//         justifyContent:'center',
//       },
//       android : {
//         justifyContent:'center'
//       }
//     })
//   },

//   button1:{
//     width:'100%',
//     backgroundColor: colors.button,
//     height: 45,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginBottom:15
//   },
//   button2:{
//     width:'100%',
//     backgroundColor: colors.buttonSignUp,
//     height: 45,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     borderRadius:50,
//     borderWidth:1,
//     borderColor:'#333',
//     marginBottom:15
//   },
//   eyeWrapper:{
//     width:'30%',
//     justifyContent:'center',
//     alignItems:'center',
//     position:'absolute',
//     left:'80%',
//     top:22
//   },
//   headerText:{
//     fontSize: 25,
//     fontFamily: 'Montserrat-Bold',
//     textAlign:'center'
//   },
//   subHeaderText:{
//     fontSize: 22,
//     fontFamily: 'Montserrat-SemiBold',
//     textAlign:'center',
//     paddingHorizontal: 15, 
//     marginTop: 15,
//     marginBottom:15
//   },
//   label:{
//     fontSize: 18,
//     fontFamily: 'Montserrat-Medium',
//     paddingHorizontal: 15, 
//   },
//   normalText:{
//     fontSize: 14,
//     fontFamily: 'Montserrat-Regular',
//   },
 
//   inputBorder:{
//     borderWidth:1,
//     borderColor:"#f1f1f1"
//   },
//   errorWrapper:{
//     width:'100%',
//     marginBottom:-10
//   },
//   errorText:{
//     color:'#dc3545',
//     fontSize:12,
//     fontFamily:'Montserrat-Regular',
//   },
//   formWrapper: {
//         width: '100%',
//         paddingTop: 20,
//         paddingBottom: 20,
//         shadowRadius: 5,
//         shadowOffset: { height: 2, width: 0 },
//     },
//   formInputView: {
//     width:'100%',
//     paddingHorizontal:15,
//     height:80,
//   },
//    linkText:{
//     color: colors.textLight,
//     fontSize: 15,
//     fontFamily:"Montserrat-SemiBold",
//     textDecorationLine: 'underline'
//   },
//   linkLightText:{
//     color: colors.textLight,
//     fontSize: 15,
//     fontFamily:"Montserrat-Regular",
//   },
//   successText:{
//     color: colors.success,
//     fontSize: 15,
//     fontFamily:"Montserrat-Regular",
//   },
//   errorText:{
//     color: colors.errorText,
//     fontSize: 15,
//     fontFamily:"Montserrat-Regular",
//   },
//   tabviews: {
//         backgroundColor: '#fff',
//         borderWidth: 1,
//         borderRadius: 2,
//         borderColor: '#ddd',
//         borderBottomWidth: 0,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//     },
 });