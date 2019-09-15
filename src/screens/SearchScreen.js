import React, {useState} from 'react'
import {Text, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

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
            <ResultsList title="Most Popular" />
            <ResultsList title="Premium Juice" />
            <ResultsList title="Cheap but good" />
        </View>
    )
}

export default SearchScreen;