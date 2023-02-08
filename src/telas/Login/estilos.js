import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: '100%',
    backgroundColor: '#F4F4F4',
  },
  containerAnimacao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    width: 200,
    height: 200
  },
  containerEntrar: {
    width: '100%',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  textoEntrar: {
    marginLeft: 20,
    fontSize: 25,
    lineHeight: 32,
    color: '#EF7A84',
  },
  containerEsqueceuSenha: {
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  textoEsqueceuSenha: {
    textAlign: 'center',
    marginBottom: 10,
  },
  botaoSenha: {
    textAlign: 'center',
    color: '#EF7A84',
  },
  EsqueciSenha: {
    textAlign: 'center',
    color: '#EF7A84',
  },
 
});