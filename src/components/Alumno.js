import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const Alumno = ({ item, EliminarAlumno }) => {
    return(
        <View style = { styles.cardAlumno }>
            <View>
                <Text>Nombre: { item.nombre }</Text>
                <Text>Edad: { item.edad }</Text>
                <Text>Carrera: { item.carrera }</Text>
            </View>
            <View style = { styles.containerEliminar }>
                <TouchableHighlight
                    style = { styles.botonEliminar }
                    onPress = { () => EliminarAlumno( item.id ) } 
                >
                    <Text style = {{ color: '#fff' }}>X</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardAlumno: {
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15,
        borderWidth: 1,
    },
    containerEliminar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonEliminar: {
        backgroundColor: '#ff0000',
        borderWidth: 1,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default Alumno;
