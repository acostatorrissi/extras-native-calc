import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Info from './Components/Info';
import Salary from './Components/Salary';
import { NativeRouter, Route} from 'react-router-native';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        
        <StatusBar style="auto" />
       
        <Route exact path="/" component={Salary} />
        <Route path="/info" component={Info} />
        
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
