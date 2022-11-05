
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View>
{/*//* Una especie de div con flexbox*/}
<Text>
{/*//* El único componente que renderiza texto    */}
  HOLA LORENITA!
</Text>
<TextInput>
{/* //* Input de HTML   */}
Nombre
</TextInput>
<TouchableOpacity >
{/*  //* Todos los touchable son como botones  */}
{/* //* Se usan con OnPress no OnClick, y para que muestren texto deben llevar un <Text> */}
<Text>
Soy un botón
</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
