import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../styles';
import { List } from '../components/List';
import { AppButton } from '../components/Btn';
import { Items } from '../types';
import { getData } from '../storage';
import { useRoute } from '@react-navigation/native';
import { useNavigationState } from '@react-navigation/native';
export function HomeScreen({ navigation}: { navigation: any}) {
  const [list, setList] = useState<Items[] | []>([]);
  const state = useNavigationState((state:any) => state?.index);
  const route = useRoute()
  const fetchData = async () => {
      //console.log(true)
      const res: Items[] | null = await getData()
      //console.log(res)
      if (res) {
        setList(res)
      }
    };
  useEffect(() => {
    
    fetchData();
  },[route.key, state])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Checklist</Text>

      <View style={[styles.main, { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }]}>
        <AppButton title='Add New Item' onPress={() => { navigation?.navigate('New') }} />
        {list ?
          <List data={list} reload={fetchData} />
          :
          <Text style={styles.white}>There are no items</Text>

        }
      </View>

    </SafeAreaView>
  );
}