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
        <Text style={styles.label}>Label</Text>
        <TextInput style={styles.inputer} placeholder="Text" />
        <Text>This is your hint</Text>
        <TextInput
          style={styles.inputer}
          placeholder="Your text here..."
          multiline={true}
          numberOfLines={8}
        />
        <Text style={styles.label}>Label</Text>
        <TextInput
          style={styles.inputer}
          placeholder="Your text here..."
          multiline={true}
          numberOfLines={8}
        />
        <Text>This is your hint</Text>
        <TouchableOpacity>
          <Text style={styles.clique}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
