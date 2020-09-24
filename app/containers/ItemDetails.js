
import React, {Component} from 'react';
import { Text, View, Dimensions } from 'react-native';

export default class ItemDetails extends Component {
    render() {
        return(
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window'). width}}>
                <Text>Show recipe details here</Text>
            </View>
        )
    }
}