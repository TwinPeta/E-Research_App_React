import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const VirtualMeetingsScreen = () => {
  const [meetingName, setMeetingName] = useState('');
  const [meetings, setMeetings] = useState([]);

  const handleScheduleMeeting = () => {
    if (meetingName.trim() !== '') {
      setMeetings([...meetings, { id: Date.now(), name: meetingName }]);
      setMeetingName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtual Meetings</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Meeting Name"
        value={meetingName}
        onChangeText={setMeetingName}
      />
      <Button title="Schedule Meeting" onPress={handleScheduleMeeting} />
      <FlatList
        data={meetings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default VirtualMeetingsScreen;
