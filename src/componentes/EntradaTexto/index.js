import { useState } from 'react';
import { HelperText } from 'react-native-paper';
import { TextInput } from 'react-native';
import estilos from './estilos';

export function EntradaTexto({ label, value, onChangeText, secureTextEntry, error, messageError }) {
  const [secureMode, setSecureMode] = useState(secureTextEntry);

  return (
    <>
      <TextInput
        placeholder={label}
        value={value}
        error={error}
        secureTextEntry={secureMode}
        onChangeText={onChangeText}
        style={estilos.input}  
        // right={
        //   secureTextEntry ?
        //   <TextInput.Icon
        //     name={secureMode ? 'eye-off' : 'eye'}
        //     onPress={() => setSecureMode(!secureMode)}
        //   /> : null
        // }
      />
      {error && <HelperText type="error" visible={error}>
        {messageError}
      </HelperText>}
    </>
  );
}
