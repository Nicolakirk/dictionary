import React, { useEffect, useState } from "react";
import { fetchWordDefinition, fetchWordDefinitionArray, fetchWordPhonetics } from "../utils/api";

const Dictionary =()=>{
    const [isLoading, setIsloading] = useState(true);
    const [dictionaryQuery, setDictionaryQuery]= useState("")
    const [searchResult, setSearchResult]= useState([])
    const[submitting, setSubmitting]= useState(false);
    const[meanings, setMeanings]=useState([]);
    const[phonetics, setphonetics]=useState({});
    const[err, setErr]=useState("")
    const[firstArray, setFirstArray]=useState([])

const handleSubmit= (event)=>{
    event.preventDefault();
    setSubmitting(true)
    setSearchResult([]);
    fetchWordDefinition(dictionaryQuery).then((data)=>{
        console.log(data);
        setSearchResult(data);
      console.log(searchResult);
    },[dictionaryQuery]);

    fetchWordDefinitionArray(dictionaryQuery).then((meanings)=>{
        console.log(meanings);
        setMeanings(meanings);
    })


    fetchWordPhonetics(dictionaryQuery).then((phoneticArray)=>{
        console.log(phoneticArray);
        setphonetics(phoneticArray);
    }).catch((err)=>{
setErr("sorry please enter a different word")
    })

    fetchWordDefinitionArray(dictionaryQuery).then((firstArray)=>{
        console.log(firstArray);
        setFirstArray(firstArray);
    })


    setDictionaryQuery("");
    setSubmitting(false);



}


    return (
        <div className="whole">
           
            <form className="Dictionaryform"
            onSubmit={handleSubmit}>
                <textarea className="dictionaryinput"
                    value={dictionaryQuery}
                    maxLength="1000"
              required
                    placeholder="search for a word definition"
                    disabled={submitting}
              onChange={(event)=> setDictionaryQuery(event.target.value)}/>
              <button className="button" type="submit">
            Find Word Definition
        
           
        </button>
            </form>
             
<section className="card">
            <h1>{searchResult.word}</h1>

           { phonetics.audio !== undefined ? <a href={phonetics.audio} target="_blank"> 📢 </a> :null
           }
         


            <ul className="dictonarytext">
                {meanings.map((data)=>{
                    
                    return(
                        
                        <section clasName="dictionarycard" key = {data.word}>
                                 
                            <h4>Part of speech - {data.partOfSpeech}</h4>

                          <li> {data.definitions[0].definition}</li>
                        { data.definitions.length >= 2 ? <li> {data.definitions[1].definition}</li> : null}
                       
                        { data.definitions.length >= 3 ? <li> {data.definitions[1].definition}</li> && <li> {data.definitions[2].definition}</li>: null}

                        { data.definitions.length >= 4 ? <li> {data.definitions[1].definition}</li> && <li> {data.definitions[2].definition}</li> && <li> {data.definitions[3].definition}</li>: null}
                        { data.definitions.length >= 5 ? <li> {data.definitions[1].definition}</li> && <li> {data.definitions[2].definition}</li> && <li> {data.definitions[3].definition}</li> && <li> {data.definitions[4].definition}</li>: null}

                        {data.definitions[0].example  ? <p> Example - {data.definitions[0].example}</p>: null }
                      
                        </section>
                    );

                })}
               
            </ul>

          
      
         </section>
          </div>
    )
}

export default Dictionary;