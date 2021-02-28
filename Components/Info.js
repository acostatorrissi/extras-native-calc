import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Link } from 'react-router-native';

const Info = () => {

    return (
        <View style={{ padding: 30 }}>

            <Text style={{fontFamily: 'sans-serif-condensed', fontSize:15}}>
                Esta aplicación toma el sueldo bruto y lo divide por 200 horas.
                Luego calcula el valor de la hora al 50% y al 100%.
                Finalmente multiplica las horas ingresadas por los valores y muestra el total.
            </Text>

            <Link style={{ padding: 10, flexDirection: 'column', marginTop:50, marginBottom:0 }} component={TouchableOpacity} to={'/'}>
                    <Text  style={{ textAlign:'center', fontFamily: 'sans-serif-condensed', fontSize:15 }} >
                        Volver
                    </Text>
            </Link>
            
        </View>
    );
};

export default Info;