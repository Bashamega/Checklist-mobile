import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from '../styles';
import { CheckList } from '../components/CheckList';
export function HomeScreen() {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Checklist</Text>
      <Calendar
        onDayPress={day => {
          setSelected(day.dateString);
        }}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true }
        }}

      />
      <View>
        {!selected?(
          <Text style={styles.heading}>
            Please Slect a date
          </Text>
        ):(<CheckList/>)}
      </View>

    </SafeAreaView>
  );
};