import React from 'react'
import {Text, View, StyleSheet, TextInput} from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <TextInput />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE'
    },
    SearchTextInputBackground: {
        backgroundColor: '#F0EEEE'
    }
}) 

export default SearchBar;