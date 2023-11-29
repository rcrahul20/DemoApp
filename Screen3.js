import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounter } from './CounterContext';

const Screen3 = ({ navigation }) => {
  const { counter, resetCounter, resumeCounter } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 3</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
          resumeCounter();
          navigation.navigate('Screen2');
        }}
      />
      <Button
        title="Go to Screen 1"
        onPress={() => {
          resetCounter();
          navigation.navigate('Screen1');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a0a0a0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default Screen3;
