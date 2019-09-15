import React, {useState} from 'react'
import {Text, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import vapeAPI from '../api/vape'

const SearchScreen = () => {
    const [term,
        setTerm] = useState('');
    const [results,
        setResults] = useState([])
    const [errorMsg,
        setErrorMsg] = useState("")

    const searchAPI = async() => {
        try {
            const response = await vapeAPI.get('/vapeJuice', {});

            setResults(response.data.vapeJuices);

        } catch (err) {
            setErrorMsg("Something went wrong! D:")
        }
    }

    return <View>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI}/>
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        <Text>We have found {results.length}
             Vape Juice.</Text>
    </View>
}

export default SearchScreen;