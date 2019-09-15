import React, {useState, useEffect} from 'react'
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

    const searchAPI = async(searchTerm) => {
        console.log('hi sexy')
        try {
            const response = await vapeAPI.get('/vapeJuice', {});
            // term = searchTerm // used if api route has paramaters
            setResults(response.data.vapeJuices);  

        } catch (err) {
            setErrorMsg("Something went wrong! D:")
        }
    }


    useEffect(() => { // HOOK: runs code only once
        searchAPI()
    }, [])

    return <View>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI}/>
        {errorMsg ? <Text>{errorMsg}</Text> : null}
        <Text>We have found {results.length}
             Vape Juice.</Text>
    </View>
}

export default SearchScreen;