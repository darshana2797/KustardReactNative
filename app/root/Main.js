import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from '../containers/Dashboard';
import ItemDetails from '../containers/ItemDetails';
import IonIcon from "react-native-vector-icons/Ionicons";
import {styles} from './styles';


function LogoTitle() {
    return (
    <View style={styles.logoTitleContainer}>
        <View style={styles.iconContainer}>
            <IonIcon name="md-fast-food-sharp" size={25} color="#F5873B" type='FontAwesome'/>
        </View>
        <Text style={styles.titleTextStyle}>Indian Recipes</Text>
    </View>
    );
  }
  
function Main() {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen 
                    name="Dashboard" 
                    component={Dashboard}
                    options={({route}) => ({
                        headerStyle: styles.headerStyle, 
                        headerTitle: props => <LogoTitle {...props} />  })
                    }/>
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

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(Main);