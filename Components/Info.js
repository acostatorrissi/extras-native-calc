import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Link } from 'react-router-native';

const Info = () => {

    const styles = StyleSheet.create ({
        text: {
            fontFamily: 'sans-serif-condensed',
            fontSize: 15,
            padding: 30,
            textAlign: 'center',
            color: 'white'
        },
        listItem: {
            fontFamily: 'sans-serif-condensed',
            fontSize: 15,
            textAlign: 'center',
            paddingLeft:20,
            paddingRight: 20,
            paddingTop: 5,
            color: 'white'
        }
    });

    return (
        <View>

            <Text style={styles.listItem}>
                El sueldo bruto es dividido por 200 horas.
            </Text>
            <Text style={styles.listItem}>
                Se calcula el valor de la hora al 50% y al 100%.
            </Text>
            <Text style={styles.listItem}>
                Se multiplican los valores calculados por las cantidades ingresadas.
            </Text>

            <Link component={TouchableOpacity} to={'/'}>
                <Text  style={styles.text} >
                    Volver
                </Text>
            </Link>
            
        </View>
    );
};

export default Info;