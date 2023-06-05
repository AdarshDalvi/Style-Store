import {STRAPI_API_TOKEN,API_URL} from './URLs'


const options = {
    method: 'GET',
    headers:{
        Authorization: 'Bearer ' + STRAPI_API_TOKEN
    }
}

export const getAllProducts = async(ENDPOINT) =>{
    const response = await fetch(`${API_URL}${ENDPOINT}`, options)
    const data = await response.json()

    return data;
}