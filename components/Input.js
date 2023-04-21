import { TextInput, StyleSheet } from 'react-native';

// Custom Components
import Colors from '../constants/colors';

function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={Colors.primary}
      onChangeText={props.textChangeHandler}
      style={styles.input}
      value={props.value}
    />
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    // Padding and Margin
    padding: 15,
    paddingHorizontal: 20,
    marginVertical: 30,

    // Colors
    backgroundColor: Colors.white,
    color: Colors.primary,

    // Font
    fontSize: 20,
    fontWeight: 'bold',

    // Border
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.primary,

    // Width
    width: '100%',

    // Android Shadow
    elevation: 8,

    // iOS Shadow
    shadowColor: Colors.dark,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
