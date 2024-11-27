import Topic from "../pages/Topics";
import { get } from "../utils/request";

export const getListQuestions = async (topicId) => {
    const result = await get(`questions?topicId=${topicId}`);
    return result;
}