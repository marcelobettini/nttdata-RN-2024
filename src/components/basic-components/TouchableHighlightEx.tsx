import { StyleSheet, Text, TouchableHighlight, Alert } from 'react-native'
import React from 'react'

const TouchableHighlightEx = () => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor="hotpink"
      onPress={() => Alert.alert('TouchableHighlight presionado')}

    >
      <Text style={styles.buttonText}>Presióname</Text>
    </TouchableHighlight>

  )
}

export default TouchableHighlightEx

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
})