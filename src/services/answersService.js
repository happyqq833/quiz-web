import { get } from "../utils/request";
import { getCookie } from "../helper/cookie";

export const getAnswersByUserId = async () => {
    const userID = getCookie("id");
    const result = await get(`answers?userId=${userID}`);
    return result;
};

export const getAnswer = async (id) => {
    const result = await get(`answers/${id}`);
    return result;
};