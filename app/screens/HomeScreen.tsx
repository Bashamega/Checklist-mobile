import React, { useState } from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native'; // Added ScrollView
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from '../styles';
import { CheckList } from '../components/CheckList';
export function HomeScreen({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>My Checklist</Text>
        <Calendar
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: { selected: true, disableTouchEvent: true }
          }}
        />
        {!selected ? (
          <Text style={styles.heading}>
            Please Select a date
          </Text>
        ) : (<CheckList navigation={navigation} currentDate={selected} />)}
      </ScrollView>
    </SafeAreaView>
  );
};
