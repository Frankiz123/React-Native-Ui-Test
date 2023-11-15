import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Picker} from 'react-native-wheel-pick';

const Screen1 = prop => {
  const [selectedValue, setSelectedValue] = useState('item5');
  // Update the selectedValue state variable whenever the picker's selectedValue changes
  const handleValueChange = value => {
    setSelectedValue(value);
  };
  useEffect(() => {
    return () => {
      // Cleanup function to remove the event listener
      Picker.removeEventListener('onValueChange', handleValueChange);
    };
  }, []);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Picker
        style={{backgroundColor: 'white', width: 300, height: 215}}
        selectedValue={selectedValue}
        pickerData={[
          'item1',
          'item2',
          'item3',
          'item4',
          'item5',
          'item6',
          'item7',
        ]}
        onValueChange={handleValueChange}
      />
      <Button title="next" onPress={prop.onChangeButton} />
    </View>
  );
};

export default Screen1;
