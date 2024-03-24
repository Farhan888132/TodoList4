import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function ToDoForm({addTask}) {

  const [tasktext, setTaskText] = useState('');

  const handleaddTask = () => {
    addTask(tasktext);
    setTaskText('');
  };

    return (
    <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Add a new task..." onChangeText={(text) => setTaskText(text)} value={tasktext} />
        <Button title="Add" onPress={handleaddTask} />
    </View>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
      marginBottom: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });