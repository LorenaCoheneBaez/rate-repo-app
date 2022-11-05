{/* //* Una especie de div con flexbox
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
        {/* //* solo los elementos touchable se pueden presionar  */}
        <Text>
          Soy un botón
        </Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => Alert.alert('Soy un botón con alerta')}>
        <Text>
          Soy un texto como botón
        </Text>
      </TouchableWithoutFeedback>
      <TouchableNativeFeedback onPress={() => Alert.alert(' Soy un botón != con alerta')}>
        <Text>
          Soy un texto como botón
        </Text>
      </TouchableNativeFeedback> */}