import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { Picker } from '@react-native-picker/picker';


class SupervisorAllocationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedResearchInterest: '',
      selectedExpertise: '',
    };
  }

  handleAllocateSupervisor = () => {
    // Implement supervisor allocation logic
    // You can determine the allocation based on selected research interest and expertise
    // Example: Call an API or perform calculations to allocate supervisor
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Allocate Supervisor</Text>
        <Picker
          selectedValue={this.state.selectedResearchInterest}
          onValueChange={(itemValue) =>
            this.setState({ selectedResearchInterest: itemValue })
          }>
          <Picker.Item label="Select Research Interest" value="" />
          {/* Add research interests options */}
        </Picker>
        <Picker
          selectedValue={this.state.selectedExpertise}
          onValueChange={(itemValue) =>
            this.setState({ selectedExpertise: itemValue })
          }>
          <Picker.Item label="Select Expertise" value="" />
          {/* Add expertise options */}
        </Picker>
        <Button title="Allocate" onPress={this.handleAllocateSupervisor} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default SupervisorAllocationScreen;
