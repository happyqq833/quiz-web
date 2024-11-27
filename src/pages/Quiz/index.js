import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { getTopic } from "../../services/topicService";
import { getListQuestions } from "../../services/questionsService";
import { getCookie } from "../../helper/cookie";
import { createAnswers } from "../../services/quizService";
import "./Quiz.css";

function Quiz() {
    const params = useParams();
    const[dataTopic, setDataTopic] = useState();
    const[dataQuestion, setDataQuestion]= useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response);
        }
        fetchApi();
    }, []);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestions(params.id);
            setDataQuestion(response);
        };
        fetchApi();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let selectedAnswers = [];
        for(let i = 0; i < e.target.elements.length;i++){
            if(e.target.elements[i].checked){
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;

                selectedAnswers.push({
                    questionId: parseInt(name),
                    answer: parseInt(value)
                });
            }
        }
        let options= {
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answers: selectedAnswers
        };

        const response = await createAnswers(options);
        if(response){
            navigate(`/result/${response.id}`)
        }
    }

 
    return (
        <>
        <div className="container"> 
            <div>
            <h2 className="section-title">Bài Quiz chủ đề: <span>{dataTopic && (<>{dataTopic.name}</>)}</span></h2>

            <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {dataQuestion.map((item,index) => (
                        <div className="form-quiz__item" key={item.id}>
                            <p className="form-quiz__question">Câu {index + 1}: {item.question}</p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quiz__answers" key={indexAns}>
                                    <input type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`}/>
                                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                        <button className="btn form-quiz__btn" type="submit">
                            Nộp bài
                        </button>
                    </form>
                            </div>
                        </div>
                    </div>
           
        </>
    )
}
export default Quiz;