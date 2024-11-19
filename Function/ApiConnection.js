//ApiConnection.js

import returnMsgs from "./Msgs";

const connectionLink = 'http://10.0.2.2:8080/';
const factsLink = 'https://dogapi.dog/api/v2/facts'

const LogIn = async (username, password) => {
    let link = connectionLink + 'login?login=' + username + '&password=' + password; 
    try {
        const response = await fetch(link);
        if (!response.ok) {
            throw new Error('Failed to log in');
        }
        const responseData = await response.text(); // Get the response as text
        // Handle response data here
        if(responseData == 'false'){
            return returnMsgs.apiFailure;
        } else {
            return returnMsgs.apiSucces;
        }
        
    } catch (error) {
        console.error(error);
        return returnMsgs.apiFailure;
    }
};

const Register = async (username, password, mail) => {
    let link = connectionLink + 'register?login=' + username + '&password=' + password + '&mail=' + mail; 
    
    try {
        const response = await fetch(link, {method: 'Post'});
        if (!response.ok) {
            throw new Error('Failed to register');
        }
        const responseData = await response.text(); // Get the response as text
        // Handle response data here
        let responseStatus = returnMsgs.apiFailure;
        if(responseData == '69'){
            responseStatus = returnMsgs.userExists;
        }
        if(responseData == '420'){
            responseStatus = returnMsgs.apiSucces;
        }
        console.log(responseStatus + ' w laczeniu z api');
        return responseStatus;
        
    } catch (error) {
        console.error(error);
        return returnMsgs.apiFailure;
    } 
};

const ScoreBoard = async () => {
    let link = connectionLink + 'ranking';
    try {
        const response = await fetch(link, { method: 'GET' });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        const responseData = await response.text();

        console.log(responseData); // Wyświetlenie surowych danych
        return responseData; // Zwrócenie surowych danych
    } catch (error) {
        console.error(error);
        return returnMsgs.apiFailure;
    }
}




        
const FunFact = async () => {
    let link = factsLink;
    try {
        console.log("Fetching fun fact from:", link); // Logowanie adresu URL
        const response = await fetch(link, { method: 'GET' });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        console.log("Fetched data:", responseData); // Logowanie otrzymanych danych
        const factBody = responseData.data[0].attributes.body;
        return factBody; // Zwrócenie tylko zawartości body
      } catch (error) {
        console.error("Error during fetch:", error); // Logowanie błędów
        return 'Failed to fetch data'; // Komunikat o błędzie
      }
}

const SendScore = async (username, score) => {
    let link = connectionLink + 'saveScore?login=' + username + '&score=' + score;     
    console.log('Link to API:', link);
    try {
        const response = await fetch(link, {method: 'Post'});
        if (!response.ok) {
            throw new Error('Failed to send score');
        }
        const responseData = await response.text(); // Get the response as text
        // Handle response data here
        let responseStatus = returnMsgs.apiFailure;
        if(responseData == '420'){
            responseStatus = returnMsgs.apiSucces;
        }
        console.log(responseStatus + ' w laczeniu z api');
        return responseStatus;
            
    } catch (error) {
        console.error(error);
        return returnMsgs.apiFailure;
    } 
}
export {LogIn, Register, ScoreBoard, FunFact, SendScore};