import React, { useState } from 'react';
import { StyleSheet, TextInput, Text } from 'react-native';

const TextInputEx = () => {
    const [text, setText] = useState('');
    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Escribe algo"
                onChangeText={setText}
                value={text}
            />
            <Text style={styles.text}>{text}</Text>
        </>
    );
}

const styles = StyleSheet.create({

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        width: '80%',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: 'black',
    },
});

export default TextInputEx;