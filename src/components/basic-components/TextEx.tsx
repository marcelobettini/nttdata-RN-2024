import { StyleSheet, Text } from 'react-native';
interface Props {
    name: string
}

const TextEx = ({ name }: Props) => {
    return (

        <Text style={styles.text}>Hola {name}, este es un ejemplo del componente Text.</Text>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: 'blue',
        backgroundColor: "pink"
    },
});

export default TextEx;