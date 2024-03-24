import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';


function App() {

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  return (
    <SafeAreaView style={{marginTop:10}}>
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}



export default App;
