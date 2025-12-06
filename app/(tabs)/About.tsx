// import React from "react";
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import {useColorScheme} from 'react-native';
import {Colors} from "@/themes/colours";

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Creator:</Text>
      <Text style={styles.creator}>Omar McIntosh - 101032428</Text>
    </View>
  );
}


const colorScheme = useColorScheme();
const currentColors = Colors[colorScheme] || Colors.light;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: currentColors.background,
  },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: currentColors.primary_text,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: currentColors.accent_text,
    },
    creator: {
        fontSize: 15,
        fontWeight: 'bold',
        color: currentColors.accent_text,
    },
});
