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
} from 'react-native';
import {AppText} from '../../components/AppText.js';
import {
  small,
  tiny,
  borderRadius,
  xLarge,
} from '../../constants/Theme/index.js';

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
  ],
};
export const News = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    axios
      .get('/list_news.php')
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
  console.log('list', list);
  return (
    <View style={{backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            color: '#15317E',
            fontSize: 42,
            paddingBottom: 10,
            textAlign: 'center',
          }}>
          NEWS
        </Text>
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
        <View style={{margin: 10}}>
          <FlatList
            keyExtractor={(item, index) => `${item.id}-${index}`}
            data={list}
            // data={state.newsdata}
            renderItem={({item, index}) => <NewsBox key={index} {...item} />}
          />
        </View>
      )}
    </View>
  );
};

const NewsBox = props => {
  const {title, image} = props;
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        elevation: 2,
        backgroundColor: '#fff',
        borderColor: '#D3D3D3',
        borderRadius: 5,
        borderWidth: 1,
        shadowColor: '#787878',
        shadowOpacity: 1.0,
        shadowRadius: 3,
        shadowOffset: {width: 0, height: -8},
      }}>
      <Image
        style={{
          height: 150,
          width: '100%',
        }}
        // source={require('../../images/property2.jpg')}
        source={{uri: image}}
      />
      <View style={{margin: 20}}>
        <Text style={{color: '#000', fontSize: 22}}>{title}</Text>
        <Text
          style={{
            color: '#666',
            fontSize: 16,
            paddingTop: 5,
          }}>
          Read more
        </Text>
      </View>
    </TouchableOpacity>
  );
};
