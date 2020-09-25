// implement the navigation here.
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../containers/Dashboard';
import ItemDetails from '../containers/ItemDetails';
import {styles} from './styles';
  
export default function Main() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen 
                    name="Dashboard" 
                    component={Dashboard}
                    options={{headerShown: false}}/>
                <Stack.Screen 
                    name="Recipe Details" 
                    component={ItemDetails} 
                    options={({route}) => ({
                        headerStyle: styles.headerStyle, 
                        headerTitle: 'Recipe Details'  })
                    }/>
            </Stack.Navigator>
        </NavigationContainer>
    ) 
}

