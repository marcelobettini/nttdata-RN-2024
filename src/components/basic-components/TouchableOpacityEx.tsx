import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

const TouchableOpacityExample = () => {
    return (

        <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert('TouchableOpacity presionado')}>
            <Text style={styles.buttonText}>Presióname</Text>
        </TouchableOpacity>
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

export default TouchableOpacityExample;