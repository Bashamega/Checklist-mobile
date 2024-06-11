import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Switch, Alert } from 'react-native';
import { styles } from '../styles';
import { AppButton } from '../components/Btn';
import { storeData } from '../storage';

export function NewItemScreen({ navigation, route }: { navigation: any, route: any }) {
    const ref = useRef<TextInput>(null);
    const [error, setError] = useState<boolean>(false); // Assuming error is always false initiall
    const [value, setValue] = useState<string>("");
    const [isDone, setIsDone] = useState<boolean>(false);

    const submit = async () => {
        setError(false)
        if (value) {
            const res = await storeData(route?.params?.date, {
                id: Math.floor(Math.random() * 1000),
                name: value,
                done: isDone
            })
            if (res) {
                navigation?.navigate('Home')
            } else {
                Alert.alert('Checklist', 'There was an error. Please try again later', [
                    {
                        text: 'Okay',
                        onPress: () => navigation?.navigate('Home'),
                        style: 'default',
                    },
                ]);
            }
        } else {
            setError(true)
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Add New Item</Text>
            <View style={styles.main}>
                <Text style={styles.white}>Item Name:</Text>
                <Text style={error ? { display: 'flex', color: 'red' } : { display: 'none' }}>Required</Text>
                <TextInput autoCapitalize="none"
                    ref={ref}
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    style={[
                        styles.inputContainer,
                        { borderColor: error ? 'red' : '#c0cbd3' },
                    ]} />
                <Text style={styles.white}>Done:</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    style={{ alignSelf: 'flex-start' }}
                    thumbColor={isDone ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setIsDone(e => !e)}
                    value={isDone}
                />
                <AppButton onPress={submit} title='Create' />
            </View>
        </View>
    );
}

