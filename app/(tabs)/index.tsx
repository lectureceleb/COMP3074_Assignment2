import React, {useEffect, useState} from "react";
import {StyleSheet, useColorScheme, ActivityIndicator, Button, TextInput} from 'react-native';

import { Text, View } from '@/components/Themed';

import { Colors } from '@/themes/colours';

export default function TabOneScreen() {
  const [apiData, setApiData] = useState(null);
  const [fxRate, setFxRate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError ] = useState(null);
  const [userInput, setUserInput ] = useState("");
  const [currencyIn, setCurrencyIn] = useState("CAD");
  const [currencyOut, setCurrencyOut] = useState("USD");
  const [message, setMessage ] = useState("");

  const colorScheme = useColorScheme();
  const currentColors = Colors[colorScheme] || Colors.light;

  // Input validation
  const isInputValid = () => {
    const ISO_TEST = /^[A-Z]{3}$/;

    // Check for 3 capital letters
    if (!ISO_TEST.test(currencyIn) || !ISO_TEST.test(currencyOut)) {
      setMessage("You must enter a valid 3-letter, all uppercase ISO code to proceed.")
      return false;
    // Check for positive number
    } else if (!(userInput > 0)) {
      setMessage("You must enter a positive number value to proceed.");
      return false;
    } else {
      return true;
    }
  }

  const currencyConversion = () => {
    setFxRate(apiData.data[currencyOut]);
    return `${userInput} ${currencyIn} converts to ${userInput * apiData.data[currencyOut]} ${currencyOut}`;
  }

  const callApi = async () => {
    setFxRate("");
    if (!isInputValid()) {
      return
    }

    setLoading(true);

    try {
      const API_KEY = "fca_live_Hx8m0HOhRpshDd9ffUmDDW0TJdt55jracSBHmWST";
      const API_ENDPOINT =
          `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${currencyIn}&currencies=${currencyOut}`;

      const response = await fetch(API_ENDPOINT);

      // Show status code if API call leads to error
      if (!response.ok){
        throw new Error(`Error code: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data);

    } catch (error) {
      console.log(`Error: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (apiData) {
      const conversion = currencyConversion();
      setMessage(conversion);
    }
  }, [apiData]);

  if (error) {
    return <Text style={styles.currency_output}>There was an error retrieving weather data.  Please try again.</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <View style={styles.separator} />

      <View style={styles.currency_container}>

        <View style={styles.input_row}>
          <Text style={styles.label}>Base currency:</Text>
          <TextInput
              style={styles.currency_input}
              placeholder="CAD"
              placeholderTextColor={currentColors.border}
              onChangeText={setCurrencyIn}
              value={currencyIn}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.input_row}>
          <Text style={styles.label}>Target currency:</Text>
          <TextInput
              style={styles.currency_input}
              placeholder="USD"
              placeholderTextColor={currentColors.border}
              onChangeText={setCurrencyOut}
              value={currencyOut}
          />
        </View>

        <View style={styles.separator} />

        <View style={styles.input_row}>
          <Text style={styles.label}>Amount:</Text>
          <TextInput
              style={styles.currency_input}
              onChangeText={setUserInput}
              value={userInput}

          />
        </View>

        <View>
          <Button
              style={styles.button}
              title={loading ? "Converting..." : "Convert"}
              onPress={callApi}
              disabled={loading}
          />
        </View>

      </View>

      <View style={styles.separator} />

      <View style={styles.conversion_view}>
        <Text style={styles.conversion_title}>Conversion:</Text>

        {loading && <ActivityIndicator size="large" color="#000000" />}

        {apiData ? (
            <Text style={styles.currency_output}>
              {message}
              {"\n"}
              Exchange rate: {fxRate}
            </Text>
        ) : (
            <Text style={styles.currency_output}>{"\n"}</Text>
        )}
      </View>

    </View>
  );


}

const colorScheme = useColorScheme();
const currentColors = Colors[colorScheme] || Colors.light;
const styles = StyleSheet.create({

  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: currentColors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: currentColors.primary_text,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: currentColors.separator,
  },

  currency_container: {
    flex: 3,
    alignItems: 'flex-start',
    backgroundColor: currentColors.background,
  },
  input_row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: "80%",
    backgroundColor: currentColors.background,
  },
  label: {
    color: currentColors.primary_text,
    fontWeight: 'bold',
    backgroundColor: currentColors.background,
  },
  currency_input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 25,
    textAlign: 'center',
    color: currentColors.border,
    width: "25%",
  },
  button: {
    color: currentColors.primary_text,
    backgroundColor: currentColors.accent_text,
  },

  conversion_view: {
    flexDirection: 'column',
    padding: 0,
    textAlign: 'center',
  },
  conversion_title: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: currentColors.background,
    color: currentColors.primary_text,
  },
  currency_output: {
    height: 70,
    color: currentColors.accent_text,
    backgroundColor: currentColors.background,
  },
});
