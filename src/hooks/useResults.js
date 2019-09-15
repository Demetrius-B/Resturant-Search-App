import React, {useState, useEffect} from 'react'
import vapeAPI from '../api/vape'

export default() => {
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

    // Call SearchAPI component is first rendered. BAD CODE! searchAPI('term')
    useEffect(() => { // HOOK: runs code only once
        searchAPI()
    }, [])

    return [searchAPI, results, errorMsg];
}
