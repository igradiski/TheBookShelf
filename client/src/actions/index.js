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
