import React, {Component} from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={(result) => result.id.toString()} // keyExractor must be a string
                renderItem={({item}) => {
                return <ResultsDetail result={item} />;
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultsList;
