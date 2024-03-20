import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Text } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(`Result: ${sum.toString()}`);
  };

  const handleSubtract = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(`Result: ${difference.toString()}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the first number"
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter the second number"
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleAdd} />
        <View style={styles.buttonSpacer} />
        <Button title="-" onPress={handleSubtract} />
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginBottom: 10,
  },
  buttonSpacer: {
    width: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
