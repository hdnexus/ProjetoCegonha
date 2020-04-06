import React from 'react';
import { StyleSheet, Text, View, Button,TextInput, TouchableOpacity } from 'react-native';


export default class Form extends React.Component{
  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.textColor}>Cadastre-se na rede cegonha!</Text>
          <TextInput style={styles.inputBox} 
           placeholder='Nome do hospital'
           placeholderTextColor = '#ffffff'>
           </TextInput>
           <TextInput style={styles.inputBox} 
           placeholder='Endereço'
           secureTextEntry={true}
           placeholderTextColor = '#ffffff'>
          
           </TextInput>
           

           <TextInput style={styles.inputBox} 
           placeholder='Usuário'
           /* secureTextEntry={true} */ 
           placeholderTextColor = '#ffffff'>
          
           </TextInput>

           <TextInput style={styles.inputBox} 
           placeholder='Senha'
           secureTextEntry={true}
           placeholderTextColor = '#ffffff'>
          
           </TextInput>
           <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Cadastrar</Text>
           </TouchableOpacity>
        </View>
      );
  }
     
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputBox: {
        width:300,
        height:40,
        backgroundColor: '#696969',
        borderRadius: 25,
        paddingHorizontal:16,
        marginVertical: 10,     
        fontSize: 16,
        color: '#ffffff',
    },
    button: {
      width: 300,
      backgroundColor: '#F0FFFF',
      borderRadius: 25,
      marginVertical: 4,
      paddingVertical: 12,
    },

    buttonText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16,
      textAlign: "center",
    },
    textColor: {
      color:'white',
      fontSize: 20,
    }
    
  });
  