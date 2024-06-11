import React, { useEffect, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import { Items } from '../types';
import { getData, clearData} from '../storage';
import { styles } from '../styles';
import { List } from './List';
import { AppButton } from './Btn';
import { useRoute } from '@react-navigation/native';
import { useNavigationState } from '@react-navigation/native';
export function CheckList({ navigation, currentDate }: { navigation: any, currentDate:string }) {
  const [list, setList] = useState<Items[] | []>([]);
  const state = useNavigationState((state: any) => state?.index);
  const route = useRoute()
  const fetchData = async () => {
    //console.log(true)
    const res: Items[] | null = await getData(currentDate)
    //console.log(res)
    if (res) {
      setList(res)
    } else {
      setList([])
    }
  };
  useEffect(() => {

    fetchData();
  }, [route.key, state])
  const handleClear = async () => {
    const res = await clearData(currentDate);
    if (res) {
      fetchData()
    } else {
      Alert.alert('Checklist', 'There was an error. Please try again later', [
        {
          text: 'Okay',
          style: 'default',
        },
      ]);
    }
  }
  return (
    <View style={[styles.container, {height: '100%'}]}>
      <Text style={styles.heading}>My Checklist for {new Date(currentDate).toLocaleDateString('en-US', { weekday: 'short' })}.</Text>
      <View style={[styles.main, { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }]}>
        <View style={list ? { display: 'flex', gap: 2 } : {}}>
          <AppButton title='Add New Item' onPress={() => { navigation?.navigate('New', {date: currentDate}) }} />
          {list.length !== 0 && (
            <AppButton title='clear' onPress={handleClear}></AppButton>
          )}
        </View>
        {list.length !== 0 ?
          <List data={list} reload={fetchData} date={currentDate} />
          :
          <Text style={styles.white}>There are no items</Text>

        }
      </View>

    </View>
  );
}