import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Switch, Alert } from 'react-native';
import { styles } from '../styles';
import { AppButton } from '../components/Btn';
import { storeData } from '../storage';
import { TimePickerModal } from 'react-native-paper-dates';

export function NewItemScreen({ navigation, route }: { navigation: any, route: any }) {
    const ref = useRef<TextInput>(null);
    const [error, setError] = useState<boolean>(false); // Assuming error is always false initiall
    const [value, setValue] = useState<string>("");
    const [isDone, setIsDone] = useState<boolean>(false);
    const [isTimeOpen, setIsTimeOpen] = useState<boolean>(false);
    const [time, setTime] = useState<any>(null)
    const submit = async () => {
        setError(false)
        if (value && time) {
            const res = await storeData(route?.params?.date, {
                id: Math.floor(Math.random() * 1000),
                name: value,
                done: isDone,
                time: time
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
    const onDismiss = React.useCallback(() => {
        setIsTimeOpen(false)
      }, [setIsTimeOpen])
    
      const onConfirm = React.useCallback(
        ({ hours, minutes }:{hours:any, minutes:any}) => {
          setIsTimeOpen(false);
          setTime({ hours, minutes });
        },
        [setIsTimeOpen]
      );
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
                <Text style={styles.white}>Time:</Text>
                <TimePickerModal visible={isTimeOpen} hours={new Date().getHours()} minutes={new Date().getMinutes()} onConfirm={onConfirm} onDismiss={onDismiss}/>
                <Text style={error ? { display: 'flex', color: 'red' } : { display: 'none' }}>Please Pick a time</Text>
                <AppButton onPress={()=>setIsTimeOpen(true)} title='Choose Time'/>
                <View style={{ marginVertical: 10 }} />
                <AppButton onPress={submit} title='Create' />
            </View>
        </View>
    );
}

