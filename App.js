import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Alert, StyleSheet } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';

// Custom Components
import Header from './components/Header/Header';
import ToDos from './components/Main/ToDos';
import ToDoModal from './components/Header/ToDoModal';
import { store } from './store/redux/store';
import { addToDo, removeToDo } from './store/redux/todos';
// import { storeToDo } from './utilities/http';

// Redux Provider (App Wrapper)
function ReduxProvider() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

function App() {
  // Redux To-Do List, Dispatcher
  const data = useSelector((state) => state.toDoList.list);
  const dispatch = useDispatch();

  // State Management
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredToDo, setEnteredToDo] = useState('');

  // Open and Close Modal
  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  // Add and Remove To-Do Handlers
  function addToDoHandler() {
    const newToDo = {
      id: Math.random() * 100,
      title: enteredToDo,
    };

    if (enteredToDo.trim().length === 0) {
      setEnteredToDo('');
      return Alert.alert('Error adding it', 'Please enter a valid value', [
        { text: 'OK' },
      ]);
    }

    setEnteredToDo('');
    setModalVisible(false);
    // storeToDo(data);
    dispatch(addToDo({ newToDo }));
  }

  function deleteToDoHandler(item) {
    dispatch(removeToDo({ item }));
  }

  // Input Text Change Handler
  function textChangeHandler(enteredText) {
    setEnteredToDo(enteredText);
  }

  return (
    <>
      <StatusBar style={modalVisible ? 'dark' : 'light'} />
      <View style={styles.container}>
        <Header openModal={openModal} />
        <ToDos list={data} deleteToDoHandler={deleteToDoHandler} />
        <ToDoModal
          visible={modalVisible}
          closeModal={closeModal}
          value={enteredToDo}
          textChangeHandler={textChangeHandler}
          addToDoHandler={addToDoHandler}
        />
      </View>
    </>
  );
}

export default ReduxProvider;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
