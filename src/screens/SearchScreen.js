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

    const filterResultsByStock = (stock) => {
        // stock === true || false
        return results.filter(results => {
            return results.inStock === stock;
        })
    }

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
             {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} Vape Juice.</Text>
            <ResultsList results={filterResultsByStock(true)} title="In Stock" />
            <ResultsList results={filterResultsByStock(false)} title="Out of Stock" />
        </View>
    )
}

export default SearchScreen;