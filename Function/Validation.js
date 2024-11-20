import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import returnMsgs from './Msgs';

const ValidateLogin = (login) => {
  if(login.length === 0) {
    return returnMsgs.empty;
  }
  return returnMsgs.good;
};

const ValidatePassword = (pass) => {
    if(pass.length === 0) {
        return returnMsgs.empty;
      }
      return returnMsgs.good;
}

const ValidateMail = (mail) => {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(mail.length === 0){
        return returnMsgs.empty;
    }
    if(!emailRegex.test(mail)){
        return returnMsgs.notMail;
    }
    return returnMsgs.good;
}

const ValidatePasswordReapet = (pass, passRe) => {
    if(passRe.length === 0) {
        return returnMsgs.empty;
      }
    if(passRe !== pass){
        return returnMsgs.diffrent;
    }
    return returnMsgs.good;
}

export {ValidateLogin, ValidatePassword, ValidatePasswordReapet, ValidateMail};