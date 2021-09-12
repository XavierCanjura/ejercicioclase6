import React,{useState,useEffect } from 'react';
import { Text,View, FlatList, StyleSheet, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shortid from 'shortid';
import Form from './src/components/Form';
import Alumno from './src/components/Alumno';

export default function App() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [carrera, setCarrera] = useState('');
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {

        const obtenerDatosStorage = async () => {
            try {
                const nombreStorage = await AsyncStorage.getItem('listaAlumnos');
                if(nombreStorage) {
                    const datos = JSON.parse(nombreStorage)
                    setAlumnos(datos);
                }
                
            } catch (error) {
                console.log(error);
            }
        }

        obtenerDatosStorage();
    }, []);

    const guardarAlumnos = () => {
        try {

            if( (nombre && carrera && edad ) === '')
            {
                alert('Ingrese los datos necesarios')
                return;
            }

            const alumnoArray = { nombre, edad, carrera  };
            alumnoArray.id = shortid.generate();
            const alumnosNuevos = [ ...alumnos, alumnoArray ]
            setAlumnos( alumnosNuevos )
            GuardarAlumnosStorage( alumnosNuevos );
        } catch (error) {
            console.log(error);
        }
    }

    const EliminarAlumno = id => {
        try {
            const nombresFiltrados = alumnos.filter( alumno => alumno.id !== id );
            setAlumnos( nombresFiltrados );
            GuardarAlumnosStorage( nombresFiltrados )
        } catch (error) {
            console.log(error);
        }
    }

    const GuardarAlumnosStorage = async ( alumnosData ) => {
        try {
            const datos = JSON.stringify(alumnosData);
            await AsyncStorage.setItem('listaAlumnos', datos);
        } catch (error) {
            console.log(error);
        }
    }

    return (
    <>
        <View style={styles.contenedor}>
            <Text style = { styles.titulo }>INFORMACIÓN DE ALUMNOS</Text>
            <Form setNombre = { setNombre } setEdad = { setEdad } setCarrera = { setCarrera } guardarAlumnos = { guardarAlumnos }/>

            <Text style = { styles.titulo }>Alumnos</Text>
            <View style = { styles.containerAlumnos}>
                
                { alumnos.length !== 0 ? (
                    <FlatList
                        data = { alumnos }
                        renderItem = { ({ item }) => <Alumno item = { item } EliminarAlumno = { EliminarAlumno } keyExtractor = { cita => cita.id } />}
                    />
                ) : ( <Text style = {{ textAlign: 'center' }}>No hay alumnos</Text>)}
                
            </View>
            
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    containerAlumnos: {
        width: '90%',
        flex: 1

    }
});