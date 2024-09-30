import React from "react";
import { styles } from "./TelaInicialStyle";
import { useState } from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { Formulario } from "../Formulario/Formulario";

export function TelaInicial() {
    const [active, setActive] = useState(false);

    const handlePress = () => {
        setActive(!active);
        console.log("active bat signal");
    }
    
    return (
        <>
            {active ? <Formulario /> : (
                <View style={styles.container}>
                    <Image
                        source={require("../../../assets/batLogo.png")}
                        style={styles.imagem}
                    />
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.butao}>active bat signal</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
}
