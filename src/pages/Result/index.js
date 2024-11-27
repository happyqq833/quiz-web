import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnswer } from "../../services/answersService";
import { getListQuestions } from "../../services/questionsService";
import "./Result.css";

function Result() {
    const params = useParams();
    const [dataResult, setDataResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () =>{
            const dataAnswers = await getAnswer(params.id);
            const dataQuestion = await getListQuestions(dataAnswers.topicId);
            console.log(dataAnswers);

            let resultFinal =[];
            for ( let i = 0; i < dataQuestion.length; i++){
                resultFinal.push({
                    ...dataQuestion[i],
                    ...dataAnswers.answers.find(item => item.questionId == dataQuestion[i].id)
                });
            }
            setDataResult(resultFinal);
          
        }
        fetchApi()
    }, [])
    console.log(dataResult)
    return(
      <>
        <h2 className="section-title">Kết quả</h2>
        <div className="container">
        <div className="result__list">
          {dataResult.map((item, index)=> (
            <div className="result__item" key={item.id}>
                  <p className="quiz__question">Câu {index + 1}: {item.question}

                   {item.correctAnswers === item.answer ? (<span className="result__tag
                   result__tag--true"> Đúng</span>
                   ) : (
                   <span className="result__tag result__tag--false"> Sai</span>)}
                  </p>
                  {item.answers.map((itemAns, indexAns) => {
                    let className = "";
                    let checked = false;
                    
                    if(item.answer === indexAns){
                      checked= true;
                      className = "result__item--selected";
                    }
                    if(item.correctAnswers === indexAns){
                      className += " result__item--result";
                    }
                    return (
                      <div className="quiz__answers" key={indexAns}>
                      <input type="radio" checked={checked} disabled/>
                      <label className={className}>{itemAns}</label>
                    </div>
                    )
                  })}
              </div>
          ))}
        </div>
        </div>
        
      </>
    )
}
export default Result;