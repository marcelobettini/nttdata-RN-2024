import React from 'react';
import { Button, Alert } from 'react-native';

const ButtonEx = () => {
    return (

        <Button
            title="Presióname"
            onPress={() => Alert.alert('Botón presionado')}
            color="blue"
        />

    );
}



export default ButtonEx;