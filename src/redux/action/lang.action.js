export const SET_LANGUAGE_DATA="SET_LANGUAGE_DATA"
export const getLanguage=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/theatre/data")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_LANGUAGE_DATA,
                payload:data
            }))
    }
}

export const SET_GENERE_DATA="SET_GENERE_DATA"
export const getGenere=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/theatre/data1")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_GENERE_DATA,
                payload:data
            }))
    }
}


export const SET_SHOW_DATA="SET_SHOW_DATA"
export const getShow=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/theatre/data2")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_SHOW_DATA,
                payload:data
            }))
    }
}
