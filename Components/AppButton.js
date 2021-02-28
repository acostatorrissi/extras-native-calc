import React from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = ({ onPress, title }) =>  (
    <TouchableOpacity onPress={onPress} style={StyleSheet.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

    appButtonContainer: {
      elevation: 8,
      backgroundColor: "white",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 50,
      color: 'orange',
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      fontFamily: 'sans-serif-condensed'
    }
  });

  export default AppButton;