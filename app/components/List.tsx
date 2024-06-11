import React from 'react';
import { styles } from '../styles';
import {
    View,
    FlatList,
    Text,
    TouchableOpacity, Alert
} from 'react-native';
import { Items, ItemProps } from '../types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { updateDataDone } from '../storage';
const Item = ({ title, done, handleDone }: ItemProps) => (
    <TouchableOpacity style={styles.item} onPress={handleDone}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="checkmark-circle" size={32} color={done?"green":"gray"} style={styles.icon} />
    </TouchableOpacity>
);

export const List = ({ data, reload }: { data: Items[], reload:any}) => {
    const handleDone = async (item:Items)=>{
        let moddifiedData = item;
        moddifiedData.done = !item.done;
        //console.log({moddifiedData})
        const res = await updateDataDone(moddifiedData)
        if (res) {
            reload()
        } else {
            Alert.alert('Checklist', 'There was an error. Please try again later', [
                {
                    text: 'Okay',
                    onPress: () => reload(),
                    style: 'default',
                },
            ]);
        }
        //console.log(moddifiedData)
    }
    return (
        <FlatList
            data={data}
            renderItem={({ item }: { item: Items }) => <Item handleDone={()=>{handleDone(item)}}  title={item.name} done={item.done} />}
            keyExtractor={item => item.id.toString()}
            style={styles.main}
            
        />
    );
};
