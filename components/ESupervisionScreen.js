import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';

const ESupervisionScreen = () => {
  const [studentName, setStudentName] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [records, setRecords] = useState([]);

  const handleAddRecord = () => {
    if (studentName.trim() !== '' && supervisorName.trim() !== '') {
      setRecords([
        ...records,
        { id: Date.now(), student: studentName, supervisor: supervisorName },
      ]);
      setStudentName('');
      setSupervisorName('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Supervision Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        style={styles.input}
        placeholder="Supervisor Name"
        value={supervisorName}
        onChangeText={setSupervisorName}
      />
      <Button title="Add Record" onPress={handleAddRecord} />
      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            Student: {item.student}, Supervisor: {item.supervisor}
          </Text>
        )}
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

export default ESupervisionScreen;
