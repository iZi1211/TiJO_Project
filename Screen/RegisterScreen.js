import React, {useState, useCallback} from 'react';
import { View, Modal, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import returnMsgs from '../Function/Msgs';
import { Register } from '../Function/ApiConnection';
import {ValidateLogin, ValidateMail, ValidatePassword, ValidatePasswordReapet} from '../Function/Validation';
import returnDefoultValues from '../Function/DefoultsValues';
import { useFocusEffect } from '@react-navigation/native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordReapet, setPasswordReapet] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [popupText, setPopupText] = useState('');

  const HandleCreateAccountPress = async  () => {
    usernameValidationResult = ValidateLogin(username);
    passwordValidationResult = ValidatePassword(password);
    passwordReapetValidationResult = ValidatePasswordReapet(password,passwordReapet);
    mailValidationResult = ValidateMail(mail);

    //passwordReapetValidationResult = returnMsgs.empty;
    
    let errorMessages = '';

    if(usernameValidationResult !== returnMsgs.good){
      errorMessages += 'Fill in username field\n\n';
    }
    if(passwordValidationResult !== returnMsgs.good){
      errorMessages += 'Fill in password field \n\n';
    }
    if(passwordReapetValidationResult === returnMsgs.empty){
      errorMessages += 'Fill in confirm password field \n\n';
    } else if(passwordReapetValidationResult === returnMsgs.diffrent) {
      errorMessages += 'Passwords are not the same \n\n';
    }
    if(mailValidationResult === returnMsgs.empty){
      errorMessages += 'Fill in email field \n\n';
    } else if(mailValidationResult === returnMsgs.notMail){
      errorMessages += 'Provide correct email address \n\n';
    }
    if(errorMessages === ''){
      try {
        let registrationResult = await Register(username,password,mail);
        console.log(registrationResult + ' W ekranie rejestracji');
        
        if(registrationResult === returnMsgs.apiSucces){
          navigation.navigate('Login');
        } else {
          if(registrationResult === returnMsgs.userExists){
            errorMessages += 'User with this username already exists \n\n';
          }
          if(registrationResult === returnMsgs.apiFailure){
            errorMessages += 'Registration failed, please try again later \n\n';
          }
        }
      } catch (error) {
        // Obsłuż błąd związany z rejestracją, jeśli wystąpi
        console.error("An error occurred during registration:", error);
        errorMessages += 'An error occurred during registration \n\n';
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
      setMail(returnDefoultValues.startInputField);
      setPassword(returnDefoultValues.startInputField);
      setPasswordReapet(returnDefoultValues.startInputField);
      
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
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={setMail} // Aktualizacja stanu mail za każdym razem, gdy zmienia się tekst w TextInput
        value={mail} // Przekazanie aktualnej wartości username do TextInput
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword} // Aktualizacja stanu password za każdym razem, gdy zmienia się tekst w TextInput
        value={password} // Przekazanie aktualnej wartości username do TextInput
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={setPasswordReapet} // Aktualizacja stanu passwordReapet za każdym razem, gdy zmienia się tekst w TextInput
        value={passwordReapet} // Przekazanie aktualnej wartości username do TextInput
      />
      <TouchableOpacity style={styles.button} onPress={ HandleCreateAccountPress}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Cancel</Text>
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
  },
});

export default RegisterScreen;
