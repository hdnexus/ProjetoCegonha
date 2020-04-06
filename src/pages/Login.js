import React from 'react';
import { StyleSheet, Text, View, Button , StatusBar } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Login extends React.Component{
    render(){
    return (
        <View style={styles.container}>
          <Logo/>
          <Form/>
          <View style={styles.signupTextCont}>
                <Text style={styles.textColor1}>Já tem uma conta?  </Text>
                <Text style={styles.signupButton}>Entrar</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    signupTextCont: {
      flexGrow: 1,
      alignItems:'center',
      justifyContent:'flex-end',
      marginVertical: 16,
      flexDirection: 'row',
      
    },
    signupButton:{
      color:'#A9A9A9',
      fontSize:16,
      fontWeight:'500',
    },
    textColor1: {
      color:'white',
    },
    textColor2: {
      color:'#A9A9A9',
    }
    
  });
  