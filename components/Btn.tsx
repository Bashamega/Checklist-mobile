import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles";
import { BtnProps } from "../types";
export const AppButton = ({ onPress, title }: BtnProps) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);