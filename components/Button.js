import { View, Pressable, Text, StyleSheet } from 'react-native';

// Custom Components
import Colors from '../constants/colors';

function Button({ children, onPress, size, type }) {
  return (
    <Pressable
      android_ripple={{ color: Colors.white }}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      onPress={onPress}
    >
      <View
        style={[
          styles.button,
          type === 'primary' ? styles.buttonPrimary : styles.buttonTransparent,
          size === 'small' ? styles.buttonSmall : styles.buttonRegular,
        ]}
      >
        <Text
          style={[
            styles.title,
            type === 'primary' ? styles.titlePrimary : styles.titleRegular,
          ]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    // Border
    borderRadius: 10,

    // Android Shadow
    elevation: 8,

    // iOS Shadow
    shadowColor: Colors.dark,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  buttonTransparent: {
    // Background
    backgroundColor: Colors.pureWhite,

    // Border
    borderColor: Colors.primary,
    borderWidth: 1,
  },

  buttonPrimary: {
    backgroundColor: Colors.primary,
  },

  buttonRegular: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },

  buttonSmall: {
    padding: 5,
  },

  pressed: {
    opacity: 0.5,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  titleRegular: {
    color: Colors.primary,
  },

  titlePrimary: {
    color: Colors.pureWhite,
  },
});
