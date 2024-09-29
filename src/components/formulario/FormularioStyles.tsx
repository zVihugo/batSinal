import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
  },
  imagem: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  imagemTam: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  inputer: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    width: 350,
    marginTop: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 3,
  },
  clique: {
    fontSize: 20,
    backgroundColor: "black",
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
    borderRadius: 10,
    padding: 10,
    width: 350,
    marginTop: 10,
    textAlign: "center",
  },
});
