import React from 'react';
import { styles } from '../styles';
import {
    View,
    FlatList,
    Text,
} from 'react-native';
import { Items, ItemProps } from '../types';

const Item = ({ title, done }: ItemProps) => (
    <View style={done? styles.done:styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export const List = ({ data }: { data: Items[] }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }: { item: Items }) => <Item  title={item.name} done={item.done} />}
            keyExtractor={item => item.id.toString()}
            style={styles.main}
            
        />
    );
};
