import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../styles';
import { List } from '../components/List';
import { AppButton } from '../components/Btn';
import { Items } from '../types';
export function HomeScreen({navigation, route}:{navigation:any, route:any}) {
  const [list, setList] = useState<Items[] | []>([])
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>My Checklist</Text>
      {list.length > 0 ?
        <List data={list} />
        :
        <View style={[styles.main, {flex:1, alignItems:'center', justifyContent: 'center', gap: 10}]}>
          <AppButton title='Add New Item' onPress={()=>{navigation?.navigate('New')}}/>
          <Text style={styles.white}>There are no items</Text>
        </View>
      }

    </SafeAreaView>
  );
}