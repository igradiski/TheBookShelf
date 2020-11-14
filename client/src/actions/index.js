import axios from 'axios';




export function getBook(
    limit = 10,
    order = 'asc',
    start = 0,
    list = ''
) {
    const request = axios.get(`/api/getBooks?limit=${limit}&skip=${start}&order=${order}`)
        .then(response => {
            if (list) {
                return [...list,...response.data]
            }
            else {
                return response.data
            }
        }

        )
    return {
        type: 'GET_BOOKS',
        payload: request
    }
}
export function getBookWithReviewer(id){
    const request = axios.get(`/api/getBook?id=${id}`)

    return(dispatch) =>{
        request.then(({data})=>{
            let book =  data;
            axios.get(`/api/getReviewer?id=${book.ownerId}`)
            .then(({data})=>{
                let response ={
                    book,
                    reviewer:data
                }
                dispatch({
                    type: 'GET_BOOK_W_REVIEWER',
                    payload: response
                })
            })

           
        })
    }
}

export function clearBookWithReviewer(){
    return {
        type: 'CLEAR_BOOK_W_REVIEWER',
        payload: {
            book:{},
            reviewer:{}
        }
    }
}




/*====================USER===================000*/

export function loginUser({email,password}){
    const request = axios.post('/api/login',{email,password})
    .then(response => response.data)
    return{
        type: 'USER_LOGIN',
        payload:request
    }
}