import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.BackgroundStyle}>
            <Feather name="search" style={styles.iconStyles}/>
            <TextInput
                style={styles.inputStyles}
                placeholder="Search"
                value={term}
                autoCapitalize="none"
                onChangeText={onTermChange} 
                onEndEditing={onTermSubmit}
                />
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