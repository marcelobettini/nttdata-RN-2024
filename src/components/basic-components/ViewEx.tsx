import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ViewEx = () => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Componente View</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    box: {
        width: 200,
        height: 200,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});

export default ViewEx;