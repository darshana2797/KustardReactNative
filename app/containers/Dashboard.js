
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import {fetchFood} from '../redux/actions/dashboardActions';
import {styles} from './styles';
import {Header} from '../components/Header'
import Icon from 'react-native-vector-icons/FontAwesome';

function Dashboard(props)  {
    //react hooks
    useEffect(() => {
        props.fetchFood();
    })
       
    const data = props.recipes && props.recipes.recipes.data;
    const dummyImgLink = "https://s3.ap-south-1.amazonaws.com/applab-machine-apps/healthy-app-images/575ee932a8c1782f1945b2fe.jpg";

    const recipesSection = data ? data.map((item, index)=> {
        return (
            item.name && item.recipes &&
            <View key={index} style={styles.cardsContainer}>
                <View style={styles.cardsContainerHeading}>
                    <Text style ={styles.recipeTypeText}>{item.name}</Text>
                    <TouchableOpacity style={styles.moreButton} onPress={() => Alert.alert('Load more for '+item.name)}>
                        <Text style= {{color: '#fff'}}>MORE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cardStyle}>
                    {
                        item.recipes.length > 0 && item.recipes.map((recipe, idx) => {
                            return (
                                <TouchableOpacity key={idx} style={styles.cardImageContainer} onPress={() => props.navigation.navigate('Recipe Details')}>
                                    <Image
                                      style={styles.recipeImageStyle} 
                                      source={{
                                        uri: dummyImgLink, //actual images would go here
                                      }}
                                    />
                                    <View style={styles.recipeNameContainer}>
                                        <Text style={styles.recipenameStyle}>{recipe.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
            </View>
        )
    }) : null

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewStyle} stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
                <Header/>
                <View style={styles.container}>
                    <View style = {styles.searchBarContainer}>
                            <TextInput
                              style={styles.searchBar}
                              onChangeText={text => console.log(text)}
                              placeholder={'Search recipes..'}
                            />
                            <View  style={styles.searchIconContainer}>
                                <Icon name="search" size={20} color="grey" style={styles.searchIconStyle}/>
                            </View>
                    </View>
                </View>
                <View style={styles.imageBannerContainer}>
                    {props.recipes && props.recipes.recipes.data ? 
                    <Image
                      style={styles.imageBannerStyle}
                      source={{
                        uri: data[0].image,
                      }}
                    /> : 
                    <TouchableOpacity>
                        <Image
                            style={styles.imageBannerStyle}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }   }
                        />
                    </TouchableOpacity>
                    }
                </View>
                {recipesSection}
            </ScrollView>         
        </View>

    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFood: () => dispatch(fetchFood())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)