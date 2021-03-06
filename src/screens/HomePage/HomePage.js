import React, {useState, useEffect} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles.js';
import {DropdownComponent} from '../../components/Dropdown.js';
import {PropertyListComponent} from '../../components/PropertyList.js';
import {PopularPlaces} from './PopularPlaces.js';
import Axios from 'axios';
import {AppText} from '../../components/AppText.js';

const window = Dimensions.get('window');
const state = {
  data: [{value: 'Banana'}, {value: 'Mango'}, {value: 'Pear'}],
  PropertyData: [
    {
      name: 'SOHO 2 at The Central',
      address: '12 Eu Tong Sen St,Singapore 059819',
      action: 'Rent',
      about: '-This unit is currently tenanted @10,000 SFD till Sept',
      price: '3,280,000',
    },
    {
      name: 'Suntec City Tower',
      address: '7 Temasek Vlvd, Singapore 038987',
      action: 'Sale',
      about: 'High floor with panoramic view, Approximately 3.',
      price: '37,050',
    },
  ],
};

export const HomePage = () => {
  const [overlay, toggleOverlay] = useState(false);
  const [count, setCount] = useState();
  useEffect(() => {
    Axios.post(
      'https://www.singapore-commercialspace.com/Webservice/count_hightlights.php',
    )
      .then(res => {
        setCount(res.data.records[0]);
      })
      .catch(err => {
        console.log('err');
      });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={[styles.scroller, {opacity: overlay ? 0.5 : 1}]}
      scrollsToTop={false}>
      <View style={styles.container}>
        <Image style={styles.Logo} source={require('../../images/logo1.jpg')} />
        <Text style={styles.ProjectName}> Singapore Commercial Sapce </Text>
      </View>
      <View style={styles.page}>
        <View style={styles.listingBlock}>
          <View style={styles.sepBlock}>
            <Image
              style={styles.sepBlockImg}
              source={require('../../images/logo5.png')}
            />
            <AppText>{count?.sale_count ?? '0'}</AppText>
            <AppText>{'Listing for Sale'}</AppText>
          </View>
          <View style={{flex: 0.07, backgroundColor: '#fff'}} />
          <View style={styles.sepBlock}>
            <Image
              style={styles.sepBlockImg}
              source={require('../../images/logo5.png')}
            />
            <AppText>{count?.rent_count ?? '0'}</AppText>
            <AppText>Listing for Rent</AppText>
          </View>
        </View>
        <DropdownComponent
          label={'Location'}
          options={[
            {value: 'option1', label: 'Option1'},
            {value: 'option3', label: 'Option3'},
            {value: 'option2', label: 'Option2'},
          ]}
          placeholder={'Select District wise'}
          onToggleModal={status => {
            toggleOverlay(status);
          }}
          onSelect={values => {
            console.log('values', values);
            toggleOverlay(false);
          }}
        />
        <View style={styles.searchView}>
          <Text style={styles.searchLabel}> Property Search </Text>

          {/* ----- PSF--------*/}
          <Text style={{padding: 10}}>PSF (per sqft.)</Text>
          {/* ------ */}
          <Text style={{padding: 10}}>Area</Text>
          {/* --------- */}
          <Text style={{padding: 10}}>Budget</Text>
          {/* --search btn */}
          <Button
            title="Search"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
          />
        </View>

        <View style={styles.propertyView}>
          {state.PropertyData.length > 0 ? (
            <View style={{marginTop: 20, marginBottom: 30}}>
              <Text style={styles.propertyLabel}>FEATURED</Text>
              <Text style={styles.propertyLabel}>PROPERTIES </Text>
            </View>
          ) : null}

          <PropertyListComponent
            PropertyData={state.PropertyData}
            onSelect={values => {
              console.log('values of selected property', values);
            }}
          />
          {/* block end */}
        </View>

        <PopularPlaces />
      </View>
    </ScrollView>
  );
};
