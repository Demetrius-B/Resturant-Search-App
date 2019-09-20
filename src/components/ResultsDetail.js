import React, {Component} from 'react'
import {Text, View, Image, StyleSheet } from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri: result.img_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>${result.price}, {result.stockCount} left in stock.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 2
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail