import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class ResearchIdeaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      researchIdea: '',
    };
  }

  handleSubmitIdea = () => {
    // Implement the logic to submit research idea to the server/database
    //  APIs or a database to store research ideas
    //  Send a POST request with the research idea
    console.log('Submit button pressed');
    this.props.navigation.navigate('SupervisorAllocation');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Submit Research Idea</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your research idea"
          onChangeText={(researchIdea) => this.setState({ researchIdea })}
        />
        <Button title="Submit" onPress={this.handleSubmitIdea} />
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
  input: {
    width: '100%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
});

export default ResearchIdeaScreen;
