import{useEffect, useState} from "react";
import{Link} from "react-router-dom";
import { getListTopic } from "../../services/topicService";
import "./Topics.css";

function Topic() {
    const [topic, setTopic]= useState([]);

    useEffect(() => {
        const fetchApi = async() =>{
            const response = await getListTopic();
            setTopic(response);
        }
        fetchApi();
    }, [])
   

  return (
    <>
      {/* <h2 className="topic-title">Danh sách chủ đề</h2> */}
      {topic.length > 0 && (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>ID</th>
        //             <th>Chủ đề</th>
        //             <th></th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {topic.map(item => (
        //             <tr key={item.id}>
        //             <td>{item.id}</td>
        //             <td>{item.name}</td>
        //             <td>
        //                 <Link to={"/quiz/" + item.id}>Làm bài</Link>
        //             </td>
        //         </tr>
        //         ))}
        //     </tbody>
        // </table>
      <div className="container">
         <div className="topic-card">
         {topic.map(item =>(
            <div className="topic-card__item" key={item.id}> 
              <img className="topic-card__item-img" src={item.image}></img>
              <div className="topic-card__item-desc">
                  <div className="topic-card__item-name">{item.name}</div>
                  <div className="topic-card__item-btn">
                    <Link to={"/quiz/" + item.id}>Làm bài</Link>
                  </div>
              </div>
            </div>
          ))}
         </div>
        </div>
      )}
        
    </>
  )
}
export default Topic;