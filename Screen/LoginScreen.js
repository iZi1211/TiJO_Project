import React, {useState, useCallback} from 'react';
import { View, Modal, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {ValidateLogin, ValidatePassword} from '../Function/Validation';
import returnMsgs from '../Function/Msgs';
import {LogIn} from '../Function/ApiConnection';
import UserState from '../Function/UserState';
import returnDefoultValues from '../Function/DefoultsValues';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  const HandleLoginPress = async () => {
    usernameValidationResult = ValidateLogin(username);
    passwordValidationResult = ValidatePassword(password);

    let errorMessages = '';

    if(usernameValidationResult !== returnMsgs.good){
      errorMessages += 'Fill in username field \n\n';
    }
    if(passwordValidationResult !== returnMsgs.good){
      errorMessages += 'Fill in password field \n\n';
    }
    if(errorMessages === ''){
      try {
        let logInResult = await LogIn(username,password);
        if(logInResult === returnMsgs.apiSucces){
          UserState.setUser(username);
          navigation.navigate('Home');
        } else {
          errorMessages = 'Login was not succesfull \n\nCheck your login and password\n\n';
        }
      } catch (error) {
        // Obsłuż błąd związany z rejestracją, jeśli wystąpi
        console.error("An error occurred while logging in:", error);
        errorMessages += 'An error occurred while logging in \n\n';
      }
    }
    if(errorMessages != ''){
      setPopupText(errorMessages);
      setModalVisible(true);
    }
    errorMessages = '';
  }

  useFocusEffect(
    useCallback(() => {
      setUsername(returnDefoultValues.startInputField);
      setPassword(returnDefoultValues.startInputField);
      
      return () => {
        
      };
    }, [])
  );

  return (
    <View style={[styles.container, { backgroundColor: '#3F069D' }]}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername} // Aktualizacja stanu username za każdym razem, gdy zmienia się tekst w TextInput
        value={username} // Przekazanie aktualnej wartości username do TextInput
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword} // Aktualizacja stanu password za każdym razem, gdy zmienia się tekst w TextInput
        value={password} // Przekazanie aktualnej wartości password do TextInput
      />
      <TouchableOpacity style={styles.button} onPress={ HandleLoginPress }>

        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.textStyle}>{popupText}</Text>

            <TouchableOpacity onPress={() => {setPopupText(''); setModalVisible(false)}}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', // białe tło pól tekstowych
  },
  button: {
    width: '80%',
    height: 40,
    borderRadius: 10, // zaokrąglone kąty
    backgroundColor: '#000000', // czarny kolor przycisku
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF', // biały kolor tekstu przycisku
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    fontSize: 30,
  },
  textStyle: {
    fontSize: 30,
  }
});

export default LoginScreen;
