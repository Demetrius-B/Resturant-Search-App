import React, {useState} from 'react'
import {Text, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import vapeAPI from '../api/vape'

const SearchScreen = () => {
    const [term,
        setTerm] = useState('');

    const [results,
        setResults] = useState([])

    const searchAPI = async() => {
        try{
        const response = await vapeAPI.get('/vapeJice', {});

        setResults(response.data.vapeJuices);

        } catch (err) {
            console.log('Something went wrong: ', err)
        }
    }

    return <View>
        <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={searchAPI}/>
        <Text>Search Screen</Text>
        <Text>We have found {results.length} Vape Juice.</Text>
    </View>
}

export default SearchScreen;