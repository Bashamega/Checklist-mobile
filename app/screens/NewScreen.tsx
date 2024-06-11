import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles';

export function NewItemScreen() {
    return (
        <View  style={styles.container}>
            <Text style={styles.heading}>Add New Item</Text>
        </View>
    );
}

