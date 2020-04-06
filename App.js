import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './src/pages/Login'


export default function App(){
     return (
    <View style={styles.container} >
      <Text></Text>
      <Login/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
