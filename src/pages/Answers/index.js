import { useEffect, useState } from "react";
import { getAnswersByUserId } from "../../services/answersService";
import { getListTopic } from "../../services/topicService";
import { Link } from "react-router-dom";
import "./Answers.css";

function Answers() {

    const [dataAnswer, setDataAnswers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const AnswersByUserId = await getAnswersByUserId();
            const topics = await getListTopic();

            let result =[];
            for(let i = 0; i < AnswersByUserId.length; i++){
                result.push({
                    ...topics.find(item => item.id == AnswersByUserId[i].topicId),
                    ...AnswersByUserId[i]
                });
            }
            setDataAnswers(result);
        }
        fetchApi();
    }, [])

    return (
        <>
        <h2 className="section-title">Lịch sử luyện tập</h2>
        {dataAnswer.length > 0 && (
            <div className="container">
                <table className="answers-table">
                    <thead className="answers-table--title">
                        <tr>
                            <th>ID</th>
                            <th>Chủ đề</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="answers-table--title">
                        {dataAnswer.map(item => (
                            <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link to={"/result/" + item.id}>Xem chi tiết</Link>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
                
            )}
        </>
    )
}

export default Answers;