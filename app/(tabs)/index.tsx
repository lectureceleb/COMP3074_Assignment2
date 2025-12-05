import React, {useEffect, useState} from "react";
import {ActivityIndicator, Button, StyleSheet, TextInput} from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError ] = useState(null);
  const [userInput, setUserInput ] = useState("");
  const [currencyIn, setCurrencyIn] = useState("CAD");
  const [currencyOut, setCurrencyOut] = useState("USD");
  const [conversion, setConversion ] = useState("");
  const [message, setMessage ] = useState("")

  const isInputValid = () => {
    const ISO_TEST = /^[A-Z]{3}$/;

    if (!ISO_TEST.test(currencyIn) || !ISO_TEST.test(currencyOut)) {
      setMessage("You must enter a valid 3-letter, all uppercase ISO code to proceed.")
      // return false;
    } else if (!(userInput > 0)) {
      setMessage("You must enter a positive number value to proceed.");
      // return false;
    } else {
      setMessage(`You can covert ${currencyIn} to ${currencyOut}!`);
      return true;
    }
  }

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
            onChangeText={setCurrencyIn}
            value={currencyIn}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Target currency:</Text>
        <TextInput
            style={styles.currency_input}
            placeholder="USD"
            placeholderTextColor="white"
            onChangeText={setCurrencyOut}
            value={currencyOut}
        />

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Amount:</Text>
        <TextInput
            style={styles.currency_input}
            onChangeText={setUserInput}
            value={userInput}

        />
        <Button
            title="Convert"
            onPress={isInputValid}
        />
      </View>

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text>Conversion:</Text>
        <Text>{message}</Text>
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
    borderColor: 'black',
    borderWidth: 1,
    color: 'white',
  },
  currency_output: {
    height: 70,
    borderColor: 'black',
    borderWidth: 2,
    color: 'white',
  },
});
