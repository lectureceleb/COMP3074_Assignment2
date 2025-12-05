import React, { useState} from "react";
import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.currency_container}>
        <Text>Base currency:</Text>
        <TextInput
            style={styles.currency_input}
            placeholder="CAD"
            placeholderTextColor="white"
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Target currency:</Text>
        <TextInput
            style={styles.currency_input}
            placeholder="USD"
            placeholderTextColor="white"
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Amount:</Text>
        <TextInput
            style={styles.currency_input}
            placeholder="100"
            placeholderTextColor="white"
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Conversion:</Text>
        <TextInput
            style={styles.currency_input}
            placeholder="100"
            placeholderTextColor="white"
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  currency_container: {
    flex: 3,
    alignItems: 'flex-start',
  },
  currency_input: {
    height: 50,
    // width: '100%',
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
});
