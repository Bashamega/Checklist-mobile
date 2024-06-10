import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Items } from './types';
import { List } from './components/List';
export default function App() {
  const [list, setList] = useState<Items[]>([{
    id: 1,
    name: 'Study',
    done: false
  }, {
    id: 2,
    name: 'Exercise',
    done: false
  }, {
    id: 3,
    name: 'Read',
    done: false
  }, {
    id: 4,
    name: 'Code',
    done: false
  }, {
    id: 5,
    name: 'Cook',
    done: false
  }, {
    id: 6,
    name: 'Walk',
    done: false
  }, {
    id: 7,
    name: 'Sleep',
    done: false
  }, {
    id: 8,
    name: 'Play',
    done: false
  }, {
    id: 9,
    name: 'Draw',
    done: false
  }, {
    id: 10,
    name: 'Sing',
    done: false
  }])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Check List</Text>
      <List data={list} />     
      <StatusBar style="auto" />

    </View>
  );
}

