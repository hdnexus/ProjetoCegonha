import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Cegonha from '../images/cegonha.png'
import Form from '../components/Form'

export default class Logo extends React.Component{
    render(){
    return (
        <View style={styles.container}>
          <Image style={styles.styleImage} source={Cegonha}></Image> 
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
      marginTop: 50,
    },
    styleImage: {
        width: 500,
        height: 170,
    }
  });