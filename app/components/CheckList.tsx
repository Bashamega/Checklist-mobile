import React, { useEffect, useState } from 'react';
import { Text, View, Alert, ScrollView } from 'react-native';
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
  }, [route.key, state, currentDate])
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
    <ScrollView style={[styles.container, {height: 'auto'}]}>
      <Text style={styles.heading}>My Checklist for {new Date(currentDate).toLocaleDateString('en-US', { weekday: 'short' })}.</Text>
        <View style={list ? { display: 'flex', gap: 2 } : {}}>
          <AppButton title='Add New Item' onPress={() => { navigation?.navigate('New', {date: currentDate}) }} />
          {list.length !== 0 && (
            <AppButton title='clear' onPress={handleClear}></AppButton>
          )}
        </View>
        {list.length !== 0 ?
          <List data={list} reload={fetchData} date={currentDate} />
          :
          <View style={styles.main}>
            <Text style={styles.white}>There are no items</Text>
          </View>

        }

    </ScrollView>
  );
}