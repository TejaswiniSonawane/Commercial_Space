import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import ValidationComponent from 'react-native-form-validator';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import HeaderBar from '../../components/Header/Header.js';
// import commonStyle from '../../config/commonStyle.js';
const window = Dimensions.get('window');

class Requirement extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    try {
      const {navigation} = this.props;
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;

    return (
      <React.Fragment>
        <HeaderBar
          navigation={navigation}
          showBackBtn={false}
          headerName={'Requirement'}
        />
        <ScrollView
          contentContainerStyle={[commonStyle.container]}
          scrollsToTop={false}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>
              {' '}
              Requirement Page
            </Text>
          </View>
        </ScrollView>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withNavigation(Requirement));
