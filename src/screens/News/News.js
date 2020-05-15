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
  base,
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
          ListEmptyComponent={
            !loading && (
              <AppText type={['center', 'large']}>No News Found</AppText>
            )
          }
          renderItem={({item, index}) => <NewsBox key={index} {...item} />}
        />
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
        // marginTop: 10,
        // marginBottom: 10, top ani bottom vegla denya peksha vertical daycha direct
        marginVertical: `${small}%`, //and dynamic thevaycha margin
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
          // height: 150, height dynamic according to screen height
          height: window.height * 0.2,
          width: '100%',
        }}
        resizeMode="cover" //very important property for image
        source={{uri: image}}
      />
      <View style={{margin: 20}}>
        <AppText type={['large', 'bold']}>{title}</AppText>
        {/* <Text style={{color: '#000', fontSize: 22}}></Text>  */}
        {/* <Text
          style={{
            color: '#666',
            fontSize: 16,
            paddingTop: 5,
          }}>
          Read more
        </Text> */}

        {/* //Apptext component banavla ahe me toh vapaar */}
        {/* example usage */}
        <TouchableOpacity style={{marginTop: `${tiny}%`}}>
          {/* //TouchableOpacity because tyala touch cha feel daycha aplyala */}
          <AppText type={['primary']}>Read More</AppText>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
