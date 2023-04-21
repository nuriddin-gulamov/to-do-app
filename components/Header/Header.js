import { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import moment from 'moment';

// Custom Components
import Colors from '../../constants/colors';
import Button from '../Button';

function Header({ openModal }) {
  // Current Date and Time
  const [time, setTime] = useState(moment().format('hh:mm'));
  const [date, setDate] = useState(moment().format('DDD Do MMM'));

  // Updating
  setInterval(() => setTime(moment().format('hh:mm')), 1000);
  setInterval(() => setDate(moment().format('ddd Do MMM')), 1000);

  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.innerContainer}>
        <View>
          <Text style={styles.time}>{time}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <Button onPress={openModal}>Add Task</Button>
      </SafeAreaView>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    // Height
    minHeight: 250,

    // Padding
    padding: 20,
    paddingHorizontal: 35,

    // Background
    backgroundColor: Colors.primary,
  },

  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  time: {
    // Font
    fontSize: 45,
    fontWeight: 'bold',

    // Color
    color: Colors.white,
  },

  date: {
    // Font
    fontSize: 18,

    // Color
    color: Colors.gray,

    // Margin
    marginTop: 5,
  },
});
