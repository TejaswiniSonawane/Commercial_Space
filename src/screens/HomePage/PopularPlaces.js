import axios from 'axios';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import ImageOverlay from 'react-native-image-overlay';
import {AppText} from '../../components/AppText.js';
import {small, tiny} from '../../constants/Theme/index.js';

const window = Dimensions.get('window');
export const PopularPlaces = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    axios
      .get('/popular_places.php')
      .then(res => {
        // console.log('res', res.data);
        setList(res.data.records);
        setLoading(false);
      })
      .catch(err => {
        console.log('er', err);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      <AppText type={['center', 'header']}>Most Popular Places</AppText>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item, index) => `${item.area_name}-${index}`}
          data={list}
          renderItem={({item, index}) => <Place key={index} {...item} />}
        />
      )}
    </View>
  );
};

const Place = props => {
  const {area_name, image, property_count} = props;
  return (
    <TouchableOpacity style={{flex: 1, marginTop: `${tiny}%`, elevation: 4}}>
      <ImageOverlay
        height={window.height * 0.2}
        source={{uri: image}}
        // overlayAlpha={0.3}
        contentPosition="bottom">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: `${small}%`,
          }}>
          <AppText type={['white']}>{area_name}</AppText>
          <AppText type={['white']}>{property_count} Properties</AppText>
        </View>
      </ImageOverlay>
    </TouchableOpacity>
  );
};
