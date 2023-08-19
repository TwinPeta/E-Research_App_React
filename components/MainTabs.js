import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudentEnrollmentScreen from './StudentEnrollmentScreen';
import ResearchIdeaScreen from './ResearchIdeaScreen';
// Import other screens as needed

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StudentEnrollment" component={StudentEnrollmentScreen} />
      <Tab.Screen name="ResearchIdea" component={ResearchIdeaScreen} />
      {/* Add more screens */}
    </Tab.Navigator>
  );
};

export default MainTabs;
