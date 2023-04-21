import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Custom Components
import Colors from '../../constants/colors';
import Button from '../Button';

function ToDoItem({ item, deleteToDoHandler }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Button onPress={deleteToDoHandler.bind(this, item)} size="small">
        <MaterialIcons name="delete" size={24} color={Colors.danger} />
      </Button>
    </View>
  );
}

export default ToDoItem;

const styles = StyleSheet.create({
  item: {
    // Padding and Margin
    padding: 20,
    marginVertical: 15,

    // Width and Border
    width: '100%',
    borderRadius: 15,

    // Background
    backgroundColor: Colors.primary,

    // Flex
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  itemText: {
    // Font
    fontSize: 18,
    fontWeight: 'bold',

    // Color
    color: Colors.gray,

    // Width
    maxWidth: '80%',
  },
});
