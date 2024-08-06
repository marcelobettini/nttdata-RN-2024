import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, Alert } from 'react-native';

const TouchableWithNativeFeedbackEx = () => {
    return (

        <TouchableNativeFeedback
            onPress={() => Alert.alert('TouchableOpacity presionado')}>
            <Text style={styles.buttonText}>Presióname</Text>
        </TouchableNativeFeedback>
    );
}

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
});

export default TouchableWithNativeFeedbackEx;