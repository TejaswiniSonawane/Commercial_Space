import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {AppText} from '../../components/AppText.js';
import {
  small,
  tiny,
  borderRadius,
  xLarge,
  base,
} from '../../constants/Theme/index.js';
import styles from './styles.js';

const window = Dimensions.get('window');
const state = {
  newsdata: [
    {
      id: '1',
      title:
        'Singapore is worlds fourth most expensive city for expats: survey',
    },
    {
      id: '2',
      title: 'Capital and Commercial Trust sells Twenty Anson for S$5116m',
    },
    {
      id: '3',
      title: 'Capital Anson for S$5116m',
    },
  ],
};
export const News = props => {
  // console.log('here props', props);
  const {navigation} = props;
  // console.log('here i got----------', navigation);

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    // setLoading(false);
    axios
      .get('https://www.singapore-commercialspace.com/Webservices/list_news')
      .then(res => {
        // console.log('res', res.data);
        setList(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log('er', err);
        setLoading(false);
      });
  }, []);
  return (
    <ScrollView contentContainerStyle={[styles.scroller]} scrollsToTop={false}>
      <View style={{backgroundColor: '#F5F5F5'}}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <AppText
            style={{
              color: '#15317E',
              fontSize: 42,
            }}
            type={['center']}>
            NEWS
          </AppText>
          <View style={{justifyContent: 'center'}}>
            <View
              style={{
                borderBottomColor: '#D3D3D3',
                borderBottomWidth: 2,
                width: 150,
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              <View
                style={{
                  alignSelf: 'center',
                  borderBottomColor: '#f00',
                  borderBottomWidth: 2,
                  zIndex: 1,
                  position: 'absolute',
                  width: 70,
                }}
              />
            </View>
          </View>
        </View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            contentContainerStyle={{paddingHorizontal: `${base}%`}}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            data={list}
            // data={state.newsdata}
            ListEmptyComponent={
              !loading && (
                <AppText type={['center', 'large']}>No News Found</AppText>
              )
            }
            renderItem={({item, index}) => (
              <NewsBox
                key={index}
                {...item}
                id={item.id}
                navigation={navigation}
              />
            )}
          />
        )}
      </View>
    </ScrollView>
  );
};

const NewsBox = props => {
  const {title, image, navigation, id} = props;
  // console.log('here newsbox props', props);
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginVertical: `${small}%`,
        elevation: 2,
        backgroundColor: '#fff',
        borderColor: '#D3D3D3',
        borderRadius: 5,
        borderWidth: 1,
        shadowColor: '#787878',
        shadowOpacity: 1.0,
        shadowRadius: 3,
        shadowOffset: {width: 0, height: -8},
      }}
      onPress={() => navigation.navigate('NewsDetailsScreen', {newsId: id})}>
      {/* // comma takun pudhe object madhe kiti pahijet tasa params pathvu shakto */}
      <Image
        style={{
          height: window.height * 0.2,
          width: '100%',
        }}
        resizeMode="cover"
        source={{uri: image}}
        // source={require('../../images/property4.jpg')}
      />
      <View style={{margin: 20}}>
        <AppText type={['large', 'bold']}>{title}</AppText>
        <TouchableOpacity style={{marginTop: `${tiny}%`}}>
          <AppText type={['primary']}>Read More</AppText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
