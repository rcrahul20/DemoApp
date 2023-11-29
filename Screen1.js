import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useCounter } from './CounterContext';
import { useFocusEffect } from '@react-navigation/native';

const Screen1 = ({ navigation }) => {
  const { counter, resetCounter ,pauseCounter,resumeCounter} = useCounter();

  useFocusEffect(
    React.useCallback(() => {
      // Start the counter when the screen is focused
      pauseCounter()
      // Clean up the counter when the screen is unfocused
      return () => {
        resetCounter();
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 1</Text>
      <Text style={styles.counter}>Counter: {counter}</Text>
      <Button
        title="Go to Screen 2"
        onPress={() => {
            resumeCounter()
            navigation.navigate('Screen2');
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
    backgroundColor: '#e0e0e0',
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

export default Screen1;
