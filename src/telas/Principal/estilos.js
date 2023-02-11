import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 25,
    paddingHorizontal: 20,
    backgroundColor: '#F1EBEB',
  },
  containerUser: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 31,
  },
  textoUser: {
    fontSize: 20,
    fontWeight: "normal",
    marginLeft: 10,
    color: '#EF7A84',
  },
  cardSaldoSemana: {
    width: '100%',
    height: 130,
    backgroundColor: '#F1F1F1',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#FF9AA6',
    borderRadius: 15,
  },
  textoSaldoSemana: {
    color: '#6A5343',
    fontSize: 16,
    lineHeight: 22,
  },
  precoSaldoSemana: {
    color: '#FF9AA6',
    fontSize: 35,
    lineHeight: 42,
    marginTop: 14,
  }
});