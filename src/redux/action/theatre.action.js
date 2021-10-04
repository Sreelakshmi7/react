export const SET_PROJECT_DATA="SET_PROJECT_DATA"
export const EDIT_SCREEN="EDIT_SCREEN"
export const getProject=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/theatre")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_PROJECT_DATA,
                payload:data
            }))
    }
}
export const addProjectToDb=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/theatre/data',{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'POST',
            body:JSON.stringify(data)
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}

export const updateScreen = (data) => {

    return {
        type: EDIT_SCREEN,
        payload: data
    }
}


export const editScreen = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/theatre/${id}`, {

            headers: {

                'accept': 'application/json',

                'content-type': 'application/json'

            },

            method: 'PUT',
            body: JSON.stringify(data)


        })

            .then(response => response.json())
            .then(response => { console.log(response) })

    }

}


export const deletemovie=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/theatre/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}