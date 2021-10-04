export const SET_BOOK_DATA="SET_BOOK_DATA"

export const getBook=(userid)=>{
    return(dispatch)=>{
        fetch(`http://localhost:4000/reservation/${userid}`)
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_BOOK_DATA,
                payload:data
            }))
    }
}