import React, { useEffect, useState } from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Produto from '../../componentes/Produtos';
import estilos from './estilos';
import { auth, db } from '../../config/firebase';
import { getDoc, doc } from "firebase/firestore";

export default function Principal({ navigation }) {
  let [nameUsuario, setNameUsuario] = useState('')
  const usuario = auth.currentUser
  const uid = usuario.uid

  useEffect(() => {

    (async () => {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNameUsuario(docSnap.data().name)
      } else {
        setNameUsuario('Úsuario não encontrado')
      }
    })()
  }, []);

  function deslogar() {
    auth.signOut();
    navigation.replace('Login')
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.containerUser}>
        <Text style={estilos.textoUser}>Olá, {nameUsuario}</Text>
        <TouchableOpacity style={estilos.botaoSair} onPress={deslogar}>
          <Icon 
            name={'log-out'} 
            size={20} 
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={estilos.cardSaldoSemana}>
        <Text style={estilos.textoSaldoSemana}>Saldo da Semana</Text>
        <Text style={estilos.precoSaldoSemana}>R$ 170,00</Text>
      </View>

      <Produto nome="Tênis" preco="250,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="50,00" />
    </View>
  );
}
