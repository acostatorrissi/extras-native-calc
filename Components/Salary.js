import React, {Component} from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import AppButton from './AppButton';

class Salary extends Component {

    constructor(props){
        super(props);

        this.state = {
            salary : 0,
            fifty: 0,
            hundred: 0
        }
        this.calculate = this.calculate.bind(this);
    }

    calculate(){
        
        const hour = this.state.salary / 200;
    
        const fifty = this.state.fifty;
        const hundred = this.state.hundred;
        
        const hour50 = hour * 1.5;
        const hour100 = hour * 2;

        const result = (hour50 * fifty) + (hour100 * hundred);

        if (result || result===0){
            Alert.alert("Tus extras son $" + result);
        }else{
            Alert.alert("Por favor revise que los valores estén ingresados correctamente");
        }        
    }

    render(){

        const styles = StyleSheet.create ({
            input: {
                height: 40,
                width: 300,
                paddingHorizontal: 5,
                backgroundColor: 'white',
                marginBottom: 5,
                borderColor: '#A96151',
                borderWidth: 2,
                borderRadius: 5,
            },
            inputContainer: {
                marginBottom: 20,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 4,
            },
            text:{
                paddingBottom: 3,
                fontFamily: 'sans-serif-condensed',
                fontSize: 15,
                color: 'white'
            },
            about:{
                fontFamily: 'sans-serif-condensed',
                fontSize: 15,
                textAlign: 'center',
                padding: 10,
                marginTop: 50,
                color: 'white'
            }
        });

        return (

            <View style={styles.inputContainer}> 
               
                <Text style={styles.text}>
                    Sueldo bruto:
                </Text>
                <TextInput style={styles.input} onChangeText = {(text) => this.setState({salary: text})} keyboardType='numeric'/>
                
                <Text style={styles.text}>
                    Cantidad de horas al 50%:
                </Text>
                <TextInput style={styles.input} onChangeText = {(text) => this.setState({fifty: text})} keyboardType='numeric'/>

                <Text style={styles.text}>
                   Cantidad de horas al 100%:
                </Text>
                <TextInput style={styles.input} onChangeText = {(text) => this.setState({hundred: text})} keyboardType='numeric'/>

                <AppButton title={"Calcular"} onPress={this.calculate}></AppButton>
                              
                <Link component={TouchableOpacity} to={'/info'}>
                    <Text  style={styles.about}>
                        ¿Cómo funciona?
                    </Text>
                </Link>             
            </View>
        );
    }
};

export default Salary;