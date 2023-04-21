import { View, Text, FlatList, StyleSheet } from 'react-native';

// Custom Components
import Colors from '../../constants/colors';
import ToDoItem from './ToDoItem';

function ToDos({ list, deleteToDoHandler }) {
  // Check of List Availability
  const listAvailable = list.length > 0;

  // Content
  let content = (
    <FlatList
      data={list}
      renderItem={(itemData) => (
        <ToDoItem item={itemData.item} deleteToDoHandler={deleteToDoHandler} />
      )}
    />
  );

  // No List
  if (!listAvailable)
    content = <Text style={styles.noItems}>There is no To-Dos here yet.</Text>;

  return (
    <View
      style={[
        styles.container,
        !listAvailable ? styles.centeredContainer : null,
      ]}
    >
      {content}
    </View>
  );
}

export default ToDos;

const styles = StyleSheet.create({
  container: {
    // Flex
    flex: 1,

    // Padding
    padding: 20,
    paddingHorizontal: 35,

    // Position
    position: 'absolute',
    top: 220,

    // Background
    backgroundColor: 'white',

    // Width
    width: '100%',

    // Border
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  centeredContainer: {
    // Padding
    paddingTop: 50,

    // Flex
    justifyContent: 'center',
    alignItems: 'center',
  },

  noItems: {
    // Font
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'italic',

    // Color
    color: Colors.dark,
  },
});
