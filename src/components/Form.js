import React from 'react';
import { View, StyleSheet, TextInput, TouchableHighlight, Text } from 'react-native';


const Form = ({ setNombre, setEdad, setCarrera, guardarAlumnos}) => {

    return(
        <View style = { styles.containerForm }>
            <TextInput 
                placeholder = 'Ingrese su nombre'
                style = { styles.input }
                onChangeText = { text => setNombre(text)}
            />
            <TextInput 
                placeholder = 'Ingrese su edad'
                style = { styles.input }
                onChangeText = { text => setEdad(text)}
                keyboardType = 'numeric'
            />
            <TextInput 
                placeholder = 'Ingrese su carrera'
                style = { styles.input }
                onChangeText = { text => setCarrera(text)}
            />

            <TouchableHighlight 
                style = { styles.boton }
                onPress = { () => guardarAlumnos() }
            >
                <Text style = { styles.textBoton}>Agregar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    containerForm: {
        display: 'flex',
        width: '90%',
    },
    input: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        fontSize: 18,
        padding: 7,
        marginBottom: 15,
    },
    boton: {
        backgroundColor: '#1181BF',
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBoton: {
        color: '#fff',
        fontSize: 18,
    }
})

export default Form;