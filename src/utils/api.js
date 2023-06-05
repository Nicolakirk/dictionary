import axios from "axios";

const dictionaryAPI = axios.create({
    baseURL : 'https://api.dictionaryapi.dev/api/v2/entries/en'
})


export const fetchWordDefinition =(searchWord)=>{
    console.log(searchWord);
    return dictionaryAPI.get(`/${searchWord}`).then((response)=>{
        console.log(response.data[0]);
        return response.data[0];
    });
}


export const fetchWordPhonetics =(searchWord)=>{
    console.log(searchWord);
    return dictionaryAPI.get(`/${searchWord}`).then((response)=>{
        let phonetics = response.data[0].phonetics[0]
        if(phonetics === undefined ){
            return [];
        } else {
        return phonetics
        }
    });
}

export const fetchWordDefinitionArray =(searchWord)=>{
    console.log(searchWord);
    return dictionaryAPI.get(`/${searchWord}`).then((response)=>{
        console.log(response.data[0].meanings);
        return response.data[0].meanings;
    });
}
export const fetchWordDefinitionArrayFirst =(searchWord)=>{
    console.log(searchWord);
    return dictionaryAPI.get(`/${searchWord}`).then((response)=>{
        console.log(response.data[0].meanings.definitions);
        return response.data[0].meanings.definitions;
    });
}