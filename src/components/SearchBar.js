import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" size={30} />
            <TextInput style={styles.inputStyles}/>
        </View>
    )
}

const styles = StyleSheet.create({
    BackgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyles: {
        borderColor: 'black',
        borderWidth: 1, 
        flex: 1
    }
}) 

export default SearchBar;