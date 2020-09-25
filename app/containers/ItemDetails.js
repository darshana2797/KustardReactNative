
import React, {Component} from 'react';
import {styles} from './styles';
import { Text, View } from 'react-native';

export default class ItemDetails extends Component {
    render() {
        return(
            <View style={styles.itemDetailsContainer}>
                <Text>Show recipe details here</Text>
            </View>
        )
    }
}