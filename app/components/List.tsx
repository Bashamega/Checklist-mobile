import React, { useEffect, useState } from 'react';
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
const Item = ({ title, time, done, handleDone, date}: ItemProps) => {
    const [overdue, setOverdue] = useState<boolean>(false)
    useEffect(()=>{
        const currentDate = new Date();
        const createdDate = new Date(date);
        createdDate.setHours(time?.hours);
        createdDate.setMinutes(time?.minutes)       
        //console.log({time, currentDate, createdDate})
        if(!done){
            if (createdDate < currentDate) {
                setOverdue(true);
            } else {
                setOverdue(false);
            }
        }
        //console.log(overdue)

    },[])
    return (
        <TouchableOpacity style={styles.item} onPress={handleDone}>
            <Text style={styles.title}>{title}</Text>
            <Text style ={{color:'white'}}>{time?.hours}:{time?.minutes}</Text>
            {overdue&&(
                <Text style={styles.tags}>Overdue</Text>
            )}
            <Ionicons name="checkmark-circle" size={32} color={done ? "green" : "gray"} style={styles.icon} />
        </TouchableOpacity>
    )
};

export const List = ({ data, reload, date }: { data: Items[], reload: any, date: string }) => {
    const handleDone = async (item: Items) => {
        let moddifiedData = item;
        moddifiedData.done = !item.done;
        //console.log({moddifiedData})
        const res = await updateDataDone(date, moddifiedData)
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
            renderItem={({ item }: { item: Items }) => <Item date={date} time={item.time} handleDone={() => { handleDone(item) }} title={item.name} done={item.done} />}
            keyExtractor={item => item.id.toString()}
            style={styles.main}

        />
    );
};
