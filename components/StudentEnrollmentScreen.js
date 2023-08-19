import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class StudentEnrollmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      researchInterest: '',
    };
  }

  handleEnroll = () => {
    //Enrollment Logic
    console.log('Enroll button pressed');
    this.props.navigation.navigate('ResearchIdea');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Student Enrollment</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          onChangeText={(fullName) => this.setState({ fullName })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Research Interest"
          onChangeText={(researchInterest) =>
            this.setState({ researchInterest })
          }
        />
        <Button title="Enroll" onPress={this.handleEnroll} />
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default StudentEnrollmentScreen;
