import { StyleSheet, Text, Alert, Pressable } from 'react-native'
import React from 'react'

const PressableEx = () => {
    return (
        <Pressable onLongPress={() => Alert.alert("Eh, soltame gatooooo")}>
            <Text style={styles.text}>PressableEx</Text>
        </Pressable>
    )
}

export default PressableEx

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'blue',
        backgroundColor: "pink",
        padding: 10,
        borderRadius: 10,
    },
})