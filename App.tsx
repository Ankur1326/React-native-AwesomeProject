/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

function App(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [display, setDisplay] = useState(false);

  const clearValue = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false)
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={text => setName(text)}
        style={styles.textStyle}
        placeholder="Enter Your name"
        value={name}
      />
      <TextInput
        onChangeText={text => setEmail(text)}
        style={styles.textStyle}
        placeholder="Enter email address"
        value={email}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        style={styles.textStyle}
        placeholder="Enter Your password"
        value={password}
      />
      <View style={styles.buttonStyle}>
        <Button onPress={() => setDisplay(true)} color={'green'} title="Get Value" />
      </View>
      <Button title="clear value" onPress={() => clearValue()} />

      {display && (
        <View>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{password}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 2,
    fontSize: 20,
    marginBottom: 5,
  },
  buttonStyle: {
    marginBottom: 8,
  },
});

export default App;
