import React from "react";
import { Text } from "react-native";
import Boton from "../components/Boton";
import { View } from "react-native";
import Contador from "../components/Contador";

function Home(){
    return(
        <View>
            <Text>Hola mundo</Text>
            <Boton/>
            <Contador/>
        </View>
    )

}

export default Home