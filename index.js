import { AppRegistry } from 'react-native';
import App from './App'; // Change the path to your main app file
import { name as appName } from './app.json';
import SplashScreen from 'react-native-splash-screen';

// Hide the splash screen after the app is loaded
AppRegistry.registerComponent(appName, () => {
  SplashScreen.hide(); // Hide the splash screen
  return App;
});
