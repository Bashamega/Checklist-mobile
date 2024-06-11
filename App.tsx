import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { Items } from './types';
import { List } from './components/List';
import { AppButton } from './components/Btn';
export default function App() {
  const [list, setList] = useState<Items[] | []>([])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Check List</Text>
      {list.length > 0 ?
        <List data={list} />
        :
        <View style={[styles.main, {flex:1, alignItems:'center', justifyContent: 'center', gap: 10}]}>
          <AppButton title='Add New Item' onPress={undefined}/>
          <Text style={styles.none}>There are no items</Text>
        </View>
      }
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

