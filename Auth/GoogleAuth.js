import React from 'react';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

React.useEffect(() => {
  GoogleSignin.configure({
    webClientId: "933540295643-sd740dc1fkr1jgq772k4vbed9t4a3bam.apps.googleusercontent.com", 
    offlineAccess: true
  });
}, [])

  const GoogleSignUp = async () => {
    
  
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => { console.log(result) });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error)
      }
    }
  };

  export default GoogleSignUp;