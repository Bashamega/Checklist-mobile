import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles';

function NewScreen() {
    return (
        <div  style={styles.container}>
            <Text style={styles.heading}>Add New Item</Text>
        </div>
    );
}

export default NewScreen;