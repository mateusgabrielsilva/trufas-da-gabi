import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Topo from './components/topo';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { logar } from '../../Services/requisicoesFirebase';
import estilos from './estilos';
import { Alerta } from '../../componentes/Alerta';
import { auth } from '../../config/firebase';

import animacaoCarregando from '../../../assets/animacaoCarregando.gif'

import botaoEntrar from '../../../assets/Login/botaoLogin.png'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [statusError, setStatusError] = useState('')
  const [mensagemError, setMensagemError] = useState('')

  // Verificar se esta sendo feita a autenticação
  const [carregando, setCarregando] = useState(true)

  //Verificar se o usuario ja logou
  useEffect(() => {
    const estadoUsuario = auth.onAuthStateChanged( usuario => {
      if(usuario){
        navigation.replace('Principal')
      }
      setCarregando(false)
    })

    return () => estadoUsuario()
  },[])

  async function realizarLogin() {
    if(email == ''){
      setMensagemError('O email é obrigatório!')
      setStatusError('email')
    }else if(senha == ''){
      setMensagemError('A senha é obrigatória!')
      setStatusError('senha')
    }else {
      const resultado = await logar(email, senha)
      if(resultado == 'erro') {
        setStatusError('firebase')
        setMensagemError('Email ou Senha não conferem')
      }else {
        navigation.replace('Principal')
      }
    } 
  }

  if(carregando) {
    return (
      <View style={estilos.containerAnimacao}>
        <Image source={animacaoCarregando}
          style={estilos.imagem}
        />
      </View>
    )
  }

  return (
    <View style={estilos.container}>
      <Topo/>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusError == 'email'}
        messageError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusError == 'senha'}
        messageError={mensagemError}
      />

      <Alerta
      mensagem={mensagemError}
      error={statusError == 'firebase'}
      setError={setStatusError}
      />

      <View style={estilos.containerEntrar}>
        <Text style={estilos.textoEntrar}>Entrar</Text>
        <TouchableOpacity style={estilos.botaoEntrar} onPress={() => realizarLogin()}>
          <Image source={botaoEntrar}/>
        </TouchableOpacity>
      </View>
      
      <View style={estilos.containerEsqueceuSenha}>
        <Text style={estilos.textoEsqueceuSenha}>Esqueceu a Senha?</Text>
        <TouchableOpacity style={estilos.botaoSenha} onPress={() => {}}>
          <Text style={estilos.EsqueciSenha}>Recuperar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
