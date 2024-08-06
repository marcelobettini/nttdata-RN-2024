import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text, Image } from 'react-native';
import ScrollViewEx from './src/components/design-components/ScrollViewEx';


export default function App() {
  return (


    <>
      <StatusBar style="auto" />
      <ScrollViewEx />
    </>

  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300
  },
  title: {
    fontSize: 20,
  }

});
