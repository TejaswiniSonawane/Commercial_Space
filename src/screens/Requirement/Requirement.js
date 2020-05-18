import {Formik} from 'formik';
import React, {useState} from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import * as Yup from 'yup';
import {AppText} from '../../components/AppText.js';
import {DropdownComponent} from '../../components/Dropdown.js';
import {small} from '../../constants/Theme/index.js';
import styles from './styles.js';

const window = Dimensions.get('window');
const state = {};
export const Requirement = props => {
  const {navigation} = props;
  const [btnLoading, setLoading] = useState(true);

  const RequirementSchema = Yup.object().shape({
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
    PropType: Yup.string().required(),
    Zone: Yup.string().required(),
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
        validationSchema={RequirementSchema}
        initialValues={{
          Name: '',
          Email: '',
          MobNo: '',
          PropType: '',
          BudgetMin: '',
          BudgetMax: '',
          AreaMin: '',
          AreaMax: '',
          Zone: '',
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
                // marginVerticaly: 20, // add nhi hote he
              }}>
              Customer Requirement
            </AppText>
            <FormInput
              onChangeText={handleChange('Name')}
              // required={true}
              placeholder="Enter Name"
              labelName="Name"
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

            <DropdownComponent
              label={'Property Type'}
              options={[
                {value: 'option1', label: 'Option1'},
                {value: 'option3', label: 'Option3'},
                {value: 'option2', label: 'Option2'},
              ]}
              placeholder={'Property Type'}
              onToggleModal={status => {
                toggleOverlay(status);
              }}
              onSelect={values => {
                console.log('values', values);
                toggleOverlay(false);
              }}
            />

            {/* dropdown ch label nhi dil tr ti space kshi ghalvaychi? */}
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#f0f',
                borderWidth: 1,
              }}>
              <View style={{flexGrow: 1, backgroundColor: '#aaa'}}>
                <DropdownComponent
                  // label={'Property Type'}
                  options={[
                    {value: 'option1', label: 'Option1'},
                    {value: 'option3', label: 'Option3'},
                    {value: 'option2', label: 'Option2'},
                  ]}
                  placeholder={'Budget Min'}
                  onToggleModal={status => {
                    toggleOverlay(status);
                  }}
                  onSelect={values => {
                    console.log('values', values);
                    toggleOverlay(false);
                  }}
                />
              </View>
              <View style={{flexGrow: 0.04, backgroundColor: '#fff'}} />
              <View style={{flexGrow: 1, backgroundColor: '#aaa'}}>
                <DropdownComponent
                  // label={'Property Type'}
                  options={[
                    {value: 'option1', label: 'Option1'},
                    {value: 'option3', label: 'Option3'},
                    {value: 'option2', label: 'Option2'},
                  ]}
                  placeholder={'Budget Max'}
                  onToggleModal={status => {
                    toggleOverlay(status);
                  }}
                  onSelect={values => {
                    console.log('values', values);
                    toggleOverlay(false);
                  }}
                />
              </View>
            </View>

            <DropdownComponent
              label={'Zone'}
              options={[
                {value: 'option1', label: 'Option1'},
                {value: 'option3', label: 'Option3'},
                {value: 'option2', label: 'Option2'},
              ]}
              placeholder={'Zone'}
              onToggleModal={status => {
                toggleOverlay(status);
              }}
              onSelect={values => {
                console.log('values', values);
                toggleOverlay(false);
              }}
            />

            <View style={{paddingHorizontal: '3%'}}>
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
