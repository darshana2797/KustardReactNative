import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#F37E29'
    },
    logoTitleContainer: {
        display: 'flex',
        flexDirection: 'row', 
        padding: 5
    },
    iconContainer: {
        backgroundColor: '#fff', 
        height: 'auto', 
        width: 'auto', 
        padding: 5, 
        borderRadius: 50
    }, 
    titleTextStyle: {
        fontSize: 20, 
        margin: 5, 
        paddingLeft: 5, 
        color: '#fff', 
        fontWeight: 'normal'
    }
})