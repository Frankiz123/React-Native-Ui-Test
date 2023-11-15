// import {View, Text} from 'react-native';
// import React, {useEffect, useState} from 'react';
// import {Picker} from 'react-native-wheel-pick';
// import Screen1 from './src/screen/screen1';
// import Screen2 from './src/screen/screen2';

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState('item5');
//   const [bool, setBool] = useState(false);
//   // Update the selectedValue state variable whenever the picker's selectedValue changes
//   const handleValueChange = value => {
//     setSelectedValue(value);
//   };
//   useEffect(() => {
//     return () => {
//       // Cleanup function to remove the event listener
//       Picker.removeEventListener('onValueChange', handleValueChange);
//     };
//   }, []);

//   const onChangeButton = () => {
//     setBool(bol => !bol);
//   };

//   return (
//     <>
//       {!bool ? (
//         <Screen1 onChangeButton={onChangeButton} />
//       ) : (
//         <Screen2 onChangeButton={onChangeButton} />
//       )}
//     </>
//   );
// };

// export default App;

import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
const App = () => {
  const [username, setUsername] = useState('');
  const [userage, setUserage] = useState('');
  const onChangeUserName = name => {
    setUsername(name);
  };
  const onChangeUserAge = age => {
    setUserage(age);
  };
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text>Your new username is </Text>
        <Text>{username}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserName(text)}
          value={username}
          placeholder="Username"
          testID="App.username"
        />
        <Text>Your new user age is </Text>
        <Text>{userage}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => onChangeUserAge(text)}
          value={userage}
          placeholder="Userage"
          testID="App.userage"
        />
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
});
