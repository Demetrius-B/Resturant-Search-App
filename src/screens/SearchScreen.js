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
        const response = await vapeAPI.get('/vapeJuice', {});

        setResults(response.data.vapeJuices);
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