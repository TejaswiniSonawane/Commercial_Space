import React, {useState} from 'react';
import {TouchableOpacity, View, Modal} from 'react-native';
import {AppText} from './AppText';
import {base, tiny, small, xTiny} from '../constants/Theme';
import {Icon} from 'react-native-elements';
import {Dialog} from 'react-native-paper';
// import {base} from '../constants/index';
export const DropdownComponent = props => {
  const {label, options, placeholder, onToggleModal, onSelect} = props;
  const [value, setValue] = useState('');
  const [selectModal, toggleModal] = useState(false);
  const openModal = () => {
    toggleModal(true);
    return onToggleModal(true);
  };
  const closeModal = () => {
    toggleModal(false);
    return onToggleModal(false);
  };
  return (
    <View style={{padding: `${base}%`}}>
      <AppText type={['bold']}>{label}</AppText>
      <TouchableOpacity
        onPress={() => openModal()}
        style={{
          height: 45,
          flexDirection: 'row',
          borderWidth: 0.9,
          borderColor: '#999',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: `${tiny}%`,
          marginTop: `${xTiny}%`,
        }}>
        <AppText>{value !== '' ? value : placeholder}</AppText>
        <Icon name="caretdown" type="antdesign" size={14} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={selectModal}
        animationType="slide"
        onDismiss={() => closeModal()}
        onRequestClose={() => closeModal()}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => closeModal()}
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: `${base}%`,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: `${base}%`,
            }}>
            {options.map((O, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setValue(O.label);
                    toggleModal(false);
                    return onSelect(O);
                  }}
                  style={{marginVertical: `${small}%`}}
                  key={index}>
                  <AppText>{O.label}</AppText>
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
