import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    logoTitleContainer: {
        height: 48,
        display: 'flex',
        flexDirection: 'row', 
        padding: 5,
        backgroundColor: '#F37E29',
        width: screenWidth,
    },
    iconContainer: {
        backgroundColor: '#fff', 
        height: 'auto', 
        width: 'auto', 
        padding: 5, 
        borderRadius: 50,
        marginLeft: 5
    }, 
    titleTextStyle: {
        fontSize: 20, 
        margin: 5, 
        paddingLeft: 5, 
        color: '#fff', 
        fontWeight: 'normal'
    }
})