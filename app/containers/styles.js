import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        display: 'flex', 
        alignItems: 'center', 
        height: screenHeight, 
        width: screenWidth, 
    },
    searchBarContainer: {
        height: 50, 
        backgroundColor: '#F37E29', 
        width: screenWidth, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent:'center', 
        flexDirection: 'row',
        borderWidth: 0
    },
    searchBar: {
        height: 40, 
        borderColor: 'gray', 
        width: '90%', 
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#fff', 
        borderWidth: 0,
        overflow: 'hidden',
        padding: 5
    },
    searchIconContainer: {
        backgroundColor: '#fff', 
        height: 40, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderTopRightRadius: 5, 
        borderBottomRightRadius: 5
    },
    searchIconStyle: {
        marginRight: 5
    },
    scrollViewStyle: {
        flex: 1,
        // height: '90%',  
        width: screenWidth, 
    },
    imageBannerContainer: {
        height: 'auto', 
        width: screenWidth, 
    },
    imageBannerStyle: {
        height: 220, 
        width: screenWidth
    },
    cardsContainer: {
        height: 220, width: screenWidth, marginTop: 25
    },
    cardsContainerHeading: {
        display: 'flex', flexDirection: 'row', justifyContent:'space-between', width: screenWidth, padding:5
    },
    recipeTypeText: {
        fontSize: 20, color: '#3e403f'
    },
    moreButton: {
        backgroundColor: '#0c8a2e', height: 30, width: 'auto', padding: 5, borderRadius: 2
    },
    cardStyle: {
        display: 'flex', flexDirection: 'row', width: screenWidth, height: 'auto', justifyContent: 'space-between', padding: 5
    },
    cardImageContainer: {
        flexDirection: 'column', height: 180, width: 'auto', padding: 4,shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 2,
        borderWidth: 1,
        borderColor: 'transparent'
    },
    recipeImageStyle: {
        height: 115, width: 118
    },
    recipeNameContainer: {
        height: 60, width: 100, padding: 2, overflow: 'hidden'
    },
    recipenameStyle: {
        fontSize: 15
    }
})