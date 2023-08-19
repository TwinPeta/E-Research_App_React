import React, { useEffect } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // Animation is complete
      navigation.navigate('StudentEnrollment'); // Navigate to StudentEnrollment
    });

    // setTimeout(() => {
    //   SplashScreen.hide(); // Hide the native splash screen
    // }, 1000); // Delay in milliseconds

    return () => {
      // Cleanup function for useEffect
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
       
       Welcome to the E-Supervision Portal
      </Animated.Text>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
       
       Please enroll to continue
     </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreenComponent;
