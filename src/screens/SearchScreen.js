import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term,
        setTerm] = useState('');
    const [searchAPI,
        results,
        errorMsg] = useResults();

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
             {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} Vape Juice.</Text>
        </View>
    )
}

export default SearchScreen;