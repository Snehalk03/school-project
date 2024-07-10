import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [First_Name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Last_Name, setLastname] = useState('');
  const [Email, setEmail] = useState('');

  const handleLogin = () => {
    fetch('http://10.0.2.2/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ First_Name,Last_Name,Email, password }),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Success', data.message);
        json.reset();
      })
      .catch(error => {
        Alert.alert('Error', 'Failed to create user');
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FirstName"
        onChangeText={text => setUsername(text)}
      />
	   <TextInput
        style={styles.input}
        placeholder="LastName"
        onChangeText={text => setLastname(text)}
      />
	   <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleLogin} color={'#7fffd4'} TextColor={"#000"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default App;
