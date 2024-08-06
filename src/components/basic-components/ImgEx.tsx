import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ImageEx = () => {
    return (
        <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/74630079?s=400&u=69284940bb826e0c0dfcc0fd9fed45a9d6094133&v=4' }}
            style={styles.image}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
    },
});

export default ImageEx;
