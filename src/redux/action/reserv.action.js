export const SET_RESERV_DATA="SET_RESERV_DATA"
export const EDIT_RES = "EDIT_RES";
export const getReserv=()=>{
    return(dispatch)=>{
        fetch("http://localhost:4000/reservation")
        .then(response=>response.json())
        .then(data=>
            dispatch({
                type:SET_RESERV_DATA,
                payload:data
            }))
    }
}

export const addReserv=(data)=>{
    return (dispatch)=>{
        fetch('http://localhost:4000/reservation',{
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

export const updateRes = (data) => {

    return {
        type: EDIT_RES,
        payload: data
    }
}


export const editRes = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/reservation/${id}`, {

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


export const deletereserv=(id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:4000/reservation/${id}`,{
            headers:{
                'accept':'application/json',
                'content-type':'application/json'
            },
            method:'DELETE',
            
        }).then(response=>response.json())//to see as object
        .then(response=>{console.log(response)})
    }
}