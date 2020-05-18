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
import {Formik, ErrorMessage, connect} from 'formik';
import * as Yup from 'yup';
import {Button, Input, Icon} from 'react-native-elements';
import {DropdownComponent} from '../../components/Dropdown.js';

const window = Dimensions.get('window');
const state = {};
export const ContactUs = props => {
  const {navigation} = props;
  const [btnLoading, setLoading] = useState(true);

  const ContactUsSchema = Yup.object().shape({
    Name: Yup.string().required('This field is required'),
    Email: Yup.string()
      .required()
      .email('Please enter valid email'),
    MobNo: Yup.number()
      .required()
      .positive()
      .integer()
      .min(7)
      .max(10), // ikde min value nhi lagte
    Subject: Yup.string().required('This field is required'),
    Message: Yup.string().required('This field is required'),
  });

  const submitForm = (data, callBack) => {
    setLoading(true);
    console.log('here data', data);
  };

  return (
    <React.Fragment>
      <Formik
        onSubmit={data => {
          submitForm(data, () => {});
          console.log('data', data);
        }}
        validationSchema={ContactUsSchema}
        initialValues={{
          Name: '',
          Email: '',
          MobNo: '',
          Subject: '',
          Message: '',
        }}>
        {formProps => <FormBody btnLoading={btnLoading} {...formProps} />}
      </Formik>
    </React.Fragment>
  );
};

const FormBody = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    setFieldValue,
    handleSubmit,
    btnLoading,
  } = props;
  // console.log('e', errors, values);
  return (
    <React.Fragment>
      <View Style={styles.container}>
        <ScrollView keyboardShouldPersistTaps={'always'}>
          <View>
            <AppText
              style={{
                color: '#000',
                fontSize: 32,
                marginHorizontal: 20,
                // marginVertically: 10,// add nhi hote hi property
              }}>
              Contact Us
            </AppText>

            <AppText
              style={{
                color: '#000',
                marginHorizontal: 20,
                marginTop: 20,
              }}>
              Please contact us if you have any questions.
            </AppText>

            <FormInput
              onChangeText={handleChange('Name')}
              // required={true}
              placeholder="Enter Your Name"
              labelName="Full Name"
              name="Name"
              errors={errors}
              touched={touched}
            />
            <FormInput
              onChangeText={handleChange('Email')}
              // required={true}
              placeholder="Enter Your EmailID"
              labelName="Email"
              name="Email"
              errors={errors}
              touched={touched}
            />
            <FormInput
              onChangeText={handleChange('MobNo')}
              // required={true}
              placeholder="Enter Your Mobile No"
              labelName="Mobile No"
              name="MobNo"
              errors={errors}
              touched={touched}
            />
            <FormInput
              onChangeText={handleChange('Subject')}
              // required={true}
              // placeholder=""
              labelName="Subject"
              name="Subject"
              errors={errors}
              touched={touched}
            />

            {/* message sathi tenni input box talvlay but ikde textarea pahije na.....I mean sang kay use kraych m te takte */}
            <FormInput
              onChangeText={handleChange('Message')}
              // required={true}
              // placeholder=""
              labelName="Message"
              name="Message"
              errors={errors}
              touched={touched}
            />

            <View style={{paddingHorizontal: '4%'}}>
              <Button
                onPress={handleSubmit}
                // loading={btnLoading}
                // onPress={()=>navigate('AddServiceCenter')}
                titleStyle={styles.buttonText}
                title="Submit"
                buttonStyle={styles.button1}
                containerStyle={styles.buttonContainer}
              />
            </View>
            <View style={{paddingHorizontal: '10%'}}>
              <View style={styles.TextWithIcon}>
                <Icon name="ios-call" type="ionicon" size={20} />
                {/* <Icon name="md-location" type="ionicon" size={20} />  he disat nhiye icon... */}
                <AppText
                  style={{
                    color: '#666',
                    marginHorizontal: `${small}%`,
                  }}
                  type={['large', 'bold']}>
                  Office Address
                </AppText>
              </View>
              <AppText type={['primary']}>
                10 Anson Road #02-24 international plaza Singapore 079903
              </AppText>
              <View style={styles.TextWithIcon}>
                <Icon name="ios-call" type="ionicon" size={20} />
                {/* <Icon name="md-location" type="ionicon" size={20} />  he disat nhiye icon... */}
                <AppText
                  style={{
                    color: '#666',
                    marginHorizontal: `${small}%`,
                  }}
                  type={['large', 'bold']}>
                  Phone Number
                </AppText>
              </View>
              <AppText style={{color: '#666'}} type={['small']}>
                +65 8468 4750
              </AppText>
              <View style={styles.TextWithIcon}>
                <Icon name="ios-call" type="ionicon" size={20} />
                {/* <Icon name="md-location" type="ionicon" size={20} />  he disat nhiye icon... */}
                <AppText
                  style={{
                    color: '#666',
                    marginHorizontal: `${small}%`,
                  }}
                  type={['large', 'bold']}>
                  Email Address
                </AppText>
              </View>
              <AppText type={['primary']}>
                contact@singapore-commercialspace.com
              </AppText>
              <AppText type={['primary']}>
                www.singapore-commercialspace.com
              </AppText>

              {/* google map code */}
              <View
                style={{
                  borderWidth: 1,
                  height: window.height * 0.3,
                  marginTop: 20,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </React.Fragment>
  );
};

export const FormInput = props => {
  const {errors, touched, name} = props;
  // console.log('n', errors[name] ?? 'empty');
  return (
    <Input
      placeholderTextColor={'#888'}
      inputContainerStyle={{
        backgroundColor: '#fff',
        borderRadius: 0,
        borderBottomWidth: 1,
        borderWidth: 0,
        borderBottomColor: '#aaa',
      }}
      errorMessage={touched[name] && errors[name] ? errors[name] : ''}
      label={
        <Text
          style={{
            fontWeight: 'normal',
            fontSize: 16,
            paddingBottom: `${small}%`,
          }}>
          <Text>{props.labelName}</Text>{' '}
          <Text style={{color: 'red', fontSize: 12}}>
            {props.required && '*'}
          </Text>
        </Text>
      }
      {...props}
    />
  );
};
