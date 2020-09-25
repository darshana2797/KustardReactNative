import React from 'react';
import { Text, View } from 'react-native';
import {styles} from './styles';
import IonIcon from "react-native-vector-icons/Ionicons";

export function Header() {
    return (
        <View style={styles.logoTitleContainer}>
            <View style={styles.iconContainer}>
                <IonIcon name="md-fast-food-sharp" size={25} color="#F5873B" type='FontAwesome'/>
            </View>
            <Text style={styles.titleTextStyle}>Indian Recipes</Text>
        </View>
    );
}