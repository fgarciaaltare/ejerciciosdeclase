import React from "react";
import { View, Text, Pressable } from "react-native-web";
import { StyleSheet } from "react-native";

function Login(props){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario de Login</Text> 
            <Pressable onPress={ () => props.navigation.navigate("Register")}>
                <Text style={styles.buttonBlue}>Ir a Resgiter</Text>
            </Pressable>
            <Pressable onPress={ () => props.navigation.navigate("HomeMenu")}>
                <Text style={styles.buttonOrange}>Entrar en la app</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f6f6f6",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#000",
    },
    buttonBlue: {
      backgroundColor: "#64B5F6", 
      padding: 20,
      borderRadius: 6,
      marginBottom: 25,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    buttonOrange: {
      backgroundColor: "#FFB74D", 
      padding: 15,
      borderRadius: 6,
      marginBottom: 25,
      textAlign: 'center',
      fontWeight: 'bold'
    },
  });

export default Login;
