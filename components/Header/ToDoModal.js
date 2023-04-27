import { Modal, SafeAreaView, View, Text, StyleSheet } from 'react-native';

// Custom Components
import Button from '../Button';
import Input from '../Input';

function ToDoModal(props) {
  return (
    <Modal visible={props.visible} animationType="fade">
      <SafeAreaView>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>
            What do you want to add as a To-Do?
          </Text>
          <Input
            placeholder="Enter..."
            textChangeHandler={props.textChangeHandler}
          />
          <View style={styles.buttonsContainer}>
            <Button onPress={props.closeModal} type="primary">
              Cancel
            </Button>
            <Button onPress={props.addToDoHandler} type="primary">
              Continue
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ToDoModal;

const styles = StyleSheet.create({
  modalContainer: {
    // Padding
    padding: 30,
    paddingTop: 200,

    // Flex
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalTitle: {
    // Font
    fontWeight: 'bold',
    fontSize: 20,

    // Text
    textAlign: 'center',
  },

  buttonsContainer: {
    // Width
    width: '100%',

    // Flex
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItem: 'center',
  },
});
