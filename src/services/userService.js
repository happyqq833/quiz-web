import {get, patch, post} from "../utils/request";

export const login = async (email, password) => { 
    const result = await get(`users?email=${email}&password=${password}`);
    return result;
};

export const register = async (options) => {
    const result = await post(`users`, options);
    return result;
};

export const checkExits = async (key, value) => {
    const result = await get(`users?${key}=${value}`);
    return result;
};
export const getUser = async (id) => {
    const result = await get(`users?id=${id}`);
    return result;
}
export const updateUser = async(id, options) =>{
    const result = await patch(`users/${id}`, options);
    return result;
}