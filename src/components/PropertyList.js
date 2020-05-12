import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { base, } from '../constants/Theme';


export const PropertyListComponent = props => {
    const { PropertyData, onSelect } = props;
    // const [value, setValue] = useState('');

    return (
        <View style={{ padding: `${base}%` }}>
            {PropertyData.length > 0 ?
                PropertyData.map((item, i) => {
                    return (
                        <View
                            style={{
                                backgroundColor: '#fff',
                                borderColor: '#D3D3D3',
                                borderRadius: 5,
                                borderWidth: 1,
                                marginTop: 10,
                                marginBottom: 10,
                                elevation: 2,
                                shadowColor: '#787878',
                                shadowOpacity: 1.0,
                                shadowRadius: 3,
                                shadowOffset: { width: 0, height: -8 },
                            }}
                            key={i}
                            onPress={() => { return onSelect(item) }}>
                            <Image
                                style={{
                                    height: 150,
                                    width: '100%',
                                }}
                                source={require('../images/property4.jpg')}
                            />
                            <Text
                                style={{
                                    fontSize: 18,
                                    textAlign: 'center',
                                }}>
                                {item.name}</Text>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 16,
                                }}>
                                {item.address}</Text>
                            <View
                                style={{
                                    borderBottomColor: '#D3D3D3',
                                    borderBottomWidth: 1,
                                    marginBottom: 10,
                                }}
                            />
                            <View style={{ marginLeft: 20, marginRight: 20 }}>
                                <View style={{
                                    backgroundColor: '#E8E8E8',
                                    borderWidth: 1,
                                    borderColor: '#A9A9A9',
                                    width: 45,
                                }}>
                                    <Text adjustsFontSizeToFit style={{ padding: 5 }}>
                                        {item.action}
                                    </Text>
                                </View>
                                <Text
                                    style={{
                                        color: '#666',
                                        fontSize: 16,
                                        fontWeight: "bold",
                                    }}>
                                    ABOUT THE UNIT-</Text>
                                <Text style={{ color: '#666' }}>{item.about}</Text>
                                <Text
                                    style={{
                                        color: '#000',
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        paddingTop: 5,
                                        paddingBottom: 5,
                                    }}>
                                    Read more
                            </Text>
                                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                                    <Text
                                        style={{
                                            color: '#000',
                                            fontFamily: 'Calibri',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                        }}>
                                        S${' '}
                                    </Text>
                                    <Text style={{ color: '#000', fontSize: 16 }}>
                                        {item.price}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                })
                :
                null
            }
        </View>
    );
};
