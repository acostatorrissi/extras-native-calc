import React from 'react';
import { View, Text} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

const Info = () => {

    return (
        <View style={{
            padding: 30
        }}
        >

            <Text style={{fontFamily: 'sans-serif-condensed'}}>
                Esta aplicación toma el sueldo bruto y lo divide por 200 horas.
                Luego calcula el valor de la hora al 50% y al 100%.
                Finalmente multiplica las horas ingresadas por los valores y muestra el total.
            </Text>
            <Link to="/">
                <Text style={{ textAlign:'center', fontFamily: 'sans-serif-condensed', marginTop: 35 }}>
                    Volver a la app
                </Text>
            </Link>
            
        </View>
    );
};

export default Info;