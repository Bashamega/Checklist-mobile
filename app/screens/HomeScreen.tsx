import React, { useState } from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from '../styles';
import { CheckList } from '../components/CheckList';
export function HomeScreen({ navigation }: { navigation: any }) {
  const [selected, setSelected] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[selected]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <>
            <Text style={styles.heading}>My Checklist</Text>
            <Calendar
              onDayPress={(day) => {
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
          </>
        )}
      />
    </SafeAreaView>
  );
};
