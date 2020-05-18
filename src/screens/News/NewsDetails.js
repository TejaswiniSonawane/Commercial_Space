import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import {AppText} from '../../components/AppText.js';
import {small, tiny, base, large} from '../../constants/Theme/index.js';

const window = Dimensions.get('window');

export const NewsDetails = props => {
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const {navigation} = props; //props madhe parent la by default navigation cha object bhetta
  const newsId = navigation.getParam('newsId'); //ikde mag getParam function use karun tyala last screen la je nav dilay tya made argumemt daycha

  React.useEffect(() => {
    console.log('props', newsId);

    axios
      .post(
        'https://www.singapore-commercialspace.com/Webservices/news_detail',
        {newsId}, //js visarli kay??
      )
      .then(res => {
        console.log('res', res.data);
        setDetails(res.data.news_detail);
        setLoading(false);
      })
      .catch(err => {
        console.log('er', err);
        setLoading(false);
      });
  }, [newsId]); //ikde square bracket made variable takaycha advantage sangto tula call var
  return (
    <View
      style={{
        backgroundColor: '#F5F5F5',
        flex: 1,
        justifyContent: 'space-between',
      }}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{flex: 1}}>
          <View style={{marginHorizontal: `${base}%`}}>
            <AppText style={{marginTop: `${tiny}%`, fontSize: 30}}>
              {details.title}
            </AppText>
            <Image
              style={{
                height: window.height * 0.25,
                width: '100%',
                marginVertical: `${large}%`,
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5,
              }}
              resizeMode="cover"
              source={{uri: details.image}}
            />
            <AppText style={{marginBottom: `${large}%`, color: '#666'}}>
              {details.description}
            </AppText>
          </View>
        </ScrollView>
      )}
      <Button
        title="Share"
        titleStyle={{color: '#fff', textAlign: 'center'}}
        buttonStyle={{
          backgroundColor: '#f00',
          bottom: 0,
        }}
        containerStyle={
          {
            //   marginVertical: `${small}%`,
          }
        }
        onPress={() => {
          Alert.alert('share news');
        }}
      />
    </View>
  );
};
