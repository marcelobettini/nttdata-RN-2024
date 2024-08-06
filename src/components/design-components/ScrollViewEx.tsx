import { StyleSheet, Text, View, ScrollView, Image, ScrollViewBase } from 'react-native'
import React from 'react'
import women from "../../data/women.json"
const ScrollViewEx = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            {women.map((woman) => (
                <View style={styles.card}>
                    <Text
                        style={styles.title}
                        key={woman.id}>{woman.name} {woman.lastName}</Text>
                    <Image source={{ uri: woman.photo }}
                        style={{ width: 200, height: 200 }}
                    />
                </View>
            ))}
        </ScrollView>
    )
}
export default ScrollViewEx

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
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
