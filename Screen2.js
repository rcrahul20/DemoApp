import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounter } from './CounterContext';

const Screen2 = ({ navigation }) => {
  const { counter, resetCounter, pauseCounter } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button
        title="Go to Screen 1"
        onPress={() => {
          resetCounter();
          navigation.navigate('Screen1');
        }}
      />
      <Button
        title="Go to Screen 3"
        onPress={() => {
          pauseCounter();
          navigation.navigate('Screen3');
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
    backgroundColor: '#c0c0c0',
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

export default Screen2;
