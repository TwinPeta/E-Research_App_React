import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './components/SplashScreen';
import StudentEnrollmentScreen from './components/StudentEnrollmentScreen';
import ResearchIdeaScreen from './components/ResearchIdeaScreen';
import ProfileScreen from './components/ProfileScreen';
import ResearchProgramScreen from './components/ResearchProgramScreen';
import UserSettingsScreen from './components/UserSettingsScreen';
import SupervisorAllocationScreen from './components/SupervisorAllocationScreen';
import VirtualMeetingsScreen from './components/VirtualMeetingsScreen';
import ESupervisionScreen from './components/ESupervisionScreen';


// Define StackNavigator for Home and Details screens
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name=".." component={SplashScreenComponent} />
    
  </HomeStack.Navigator>
);

// Define BottomTabNavigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home_" component={HomeStackScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="UserSettings" component={UserSettingsScreen} />
    
  </Tab.Navigator>
);

// Define DrawerNavigator
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="StudentEnrollment" component={StudentEnrollmentScreen} />
    <Drawer.Screen name="ResearchIdea" component={ResearchIdeaScreen} />
    <Drawer.Screen name="ResearchPrograms" component={ResearchProgramScreen} />
    <Drawer.Screen name="SupervisorAllocation" component={SupervisorAllocationScreen}/>
    <Drawer.Screen name="VirtualMeetings" component={VirtualMeetingsScreen} />
    <Drawer.Screen name="ESupervision" component={ESupervisionScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="UserSettings" component={UserSettingsScreen} />
  </Drawer.Navigator>
);

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <NavigationContainer>
      <View style={[styles.container, darkMode && styles.darkContainer]}>
        <View style={styles.header}>
          <Switch
            value={darkMode}
            onValueChange={() => setDarkMode(!darkMode)}
          />
        </View>
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212', // Dark mode background color
  },
  header: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default App;
