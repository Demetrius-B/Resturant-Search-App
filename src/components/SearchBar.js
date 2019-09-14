import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange}) => {
    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" style={styles.iconStyles}/>
            <TextInput
                style={styles.inputStyles}
                placeholder="search"
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    BackgroundStyle: {
        backgroundColor: '#F0EEEE',
        marginTop: 10,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyles: {
        flex: 1
    },
    iconStyles: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

export default SearchBar;