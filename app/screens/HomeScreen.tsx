import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../styles';
import { List } from '../components/List';
import { AppButton } from '../components/Btn';
import { Items } from '../types';
import { getData } from '../storage';
export function HomeScreen({ navigation, route }: { navigation: any, route: any }) {
  const [list, setList] = useState<Items[] | []>([])
  useEffect(() => {
    const fetchData = async () => {
      const res: Items[] | null = await getData()
      console.log(res)
      if (res) {
        setList(res)
      }
    };
    fetchData();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Checklist</Text>

      <View style={[styles.main, { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }]}>
        <AppButton title='Add New Item' onPress={() => { navigation?.navigate('New') }} />
        {list ?
          <List data={list} />
          :
          <Text style={styles.white}>There are no items</Text>

        }
      </View>

    </SafeAreaView>
  );
}