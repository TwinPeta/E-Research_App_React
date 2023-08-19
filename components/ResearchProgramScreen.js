import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ResearchProgramScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Research Programs</Text>
      <View style={styles.researchProgram}>
        <Text style={styles.programTitle}>Program 1: Sustainable Energy Solutions</Text>
        <Text style={styles.programDescription}>
          This research program focuses on developing sustainable energy solutions to address
          environmental challenges and meet growing energy demands.
        </Text>
      </View>
      <View style={styles.researchProgram}>
        <Text style={styles.programTitle}>Program 2: Climate Change Adaptation</Text>
        <Text style={styles.programDescription}>
          The Climate Change Adaptation program aims to explore strategies and technologies to
          mitigate the impacts of climate change and ensure resilience in vulnerable regions.
        </Text>
      </View>
      <View style={styles.researchProgram}>
        <Text style={styles.programTitle}>Program 2: Climate Change Adaptation</Text>
        <Text style={styles.programDescription}>
          The Climate Change Adaptation program aims to explore strategies and technologies to
          mitigate the impacts of climate change and ensure resilience in vulnerable regions.
        </Text>
      </View>
      <View style={styles.researchProgram}>
        <Text style={styles.programTitle}>Program 1: Sustainable Energy Solutions</Text>
        <Text style={styles.programDescription}>
          This research program focuses on developing sustainable energy solutions to address
          environmental challenges and meet growing energy demands.
        </Text>
      </View>

      {/* Add more research program sections as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  researchProgram: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  programDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default ResearchProgramScreen;
