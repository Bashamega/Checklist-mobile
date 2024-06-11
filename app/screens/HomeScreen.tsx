import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Alert } from 'react-native';
import { styles } from '../styles';
import { List } from '../components/List';
import { AppButton } from '../components/Btn';
import { Items } from '../types';
import { clearData, getData } from '../storage';
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
      }else{
        setList([])
      }
    };
  useEffect(() => {
    
    fetchData();
  },[route.key, state])
  const handleClear = async()=>{
    const res = await clearData();
    if(res){
      fetchData()
    }else{
      Alert.alert('Checklist', 'There was an error. Please try again later', [
        {
            text: 'Okay',
            style: 'default',
        },
    ]);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Checklist</Text>

      <View style={[styles.main, { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }]}>
        <View style={list? {display:'flex', gap:2}:{}}>
        <AppButton title='Add New Item' onPress={() => { navigation?.navigate('New') }} />
        {list.length !== 0&&(
          <AppButton title='clear' onPress={handleClear}></AppButton>
        )}
        </View>
        {list.length !== 0 ?
          <List data={list} reload={fetchData} />
          :
          <Text style={styles.white}>There are no items</Text>

        }
      </View>

    </SafeAreaView>
  );
}