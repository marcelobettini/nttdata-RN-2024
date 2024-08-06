import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Platform, Text, Image } from 'react-native';
import AdvancedFlatListEx from './src/components/design-components/FlatViewEx';



export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AdvancedFlatListEx />
    </>

  );
}

const styles = StyleSheet.create({


});
