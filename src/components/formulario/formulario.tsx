import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import batLogo from "../../../assets/batLogo.png";
import { styles } from "./FormularioStyles";

export function Formulario() {
  return (
    <>
      <View style={styles.imagem}>
        <Image source={batLogo} style={styles.imagemTam} />
      </View>

      <View style={styles.container}>
        <TextInput style={styles.inputer} placeholder="Text" />
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.inputer} placeholder="Text" />
        <Text>Say about you</Text>
        <TextInput
          style={styles.inputer}
          placeholder="Your text here..."
          multiline={true}
          numberOfLines={8}
        />
        <Text style={styles.label}>Your history</Text>
        <TextInput
          style={styles.inputer}
          placeholder="Your text here..."
          multiline={true}
          numberOfLines={8}
        />
        <Text>hahaha.....</Text>
        <TouchableOpacity>
          <Text style={styles.clique}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
