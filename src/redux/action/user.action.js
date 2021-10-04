export const SET_USER_DATA = "SET_USER_DATA"
export const EDIT_USER = "EDIT_USER";

export const getUser = () => {
    return (dispatch) => {
        fetch("http://localhost:4000/user")
            .then(response => response.json())
            .then(data =>
                dispatch({
                    type: SET_USER_DATA,
                    payload: data
                }))
    }
}

export const addUserToDb = (data) => {
    return (dispatch) => {
        fetch('http://localhost:4000/user', {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(response => response.json())//to see as object
            .then(response => { console.log(response) })
    }
}

export const updateUser = (data) => {

    return {
        type: EDIT_USER,
        payload: data
    }
}


export const editUser = (data, id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/user/${id}`, {

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

export const deleteuser = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:4000/user/${id}`, {
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            method: 'DELETE',

        }).then(response => response.json())//to see as object
            .then(response => { console.log(response) })
    }
}