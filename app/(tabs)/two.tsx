import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>Creator:</Text>
      <Text style={styles.creator}>Omar McIntosh - 101032428</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
        fontSize: 25,
        fontWeight: 'bold',
        color: '#57FEFF',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5CB3FF',
    },
    creator: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFF00',
    },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
