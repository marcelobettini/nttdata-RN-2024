import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const data = [...Array(100)].map((_, index) => ({ key: `Elemento ${index + 1}` }));

const AdvancedFlatListEx = () => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <View style={styles.box}>
                    <Text style={styles.text}>{item.key}</Text>
                </View>
            )}
            keyExtractor={item => item.key}
            ListHeaderComponent={() => (
                <View style={styles.header}>
                    <Text style={styles.headerText}>Encabezado de la Lista</Text>
                </View>
            )}
            ListFooterComponent={() => (
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Pie de Página de la Lista</Text>
                </View>
            )}
            contentContainerStyle={styles.container}
            ItemSeparatorComponent={() => (
                <View style={styles.separator} />
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',

    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    footer: {
        padding: 20,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 18,
        color: '#666',
    },
    box: {
        width: '100%',
        padding: 20,
        marginVertical: 5,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
});

export default AdvancedFlatListEx;