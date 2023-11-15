import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from 'react-native-wheel-pick';

const Screen2 = prop => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="back" onPress={prop.onChangeButton} />
    </View>
  );
};

export default Screen2;
