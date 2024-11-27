import { useEffect, useState } from "react";
import { getUser } from "../../services/userService";
import { getCookie } from "../../helper/cookie";
import "./account.css";
import Answers from "../Answers";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile";

function Account() {
    const [dataUser, setDataUser] = useState([]);
    

    useEffect(() => {
        const fetchApi = async () => {
            const userId = getCookie("id");
            const response = await getUser(userId);
            setDataUser(response);
        }
        fetchApi();
    }, []);

    if (dataUser.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="container">
                <div>
                    <div className="account">
                    <Link className="btn" to={"/editProfile/" + dataUser[0]?.id}>Edit Profile</Link>
                        <div className="acc-avatar">
                            <img src={dataUser[0]?.avatar} alt="User Avatar" />
                        </div>
                        <div className="acc-info">
                            <h5>Name:</h5>
                            <p>{dataUser[0]?.fullName}</p>
                            <h5>Email:</h5>
                            <p>{dataUser[0]?.email}</p>
                            
                        </div>
                        <div className="acc-info">
                            <h5>Country:</h5>
                            <p>{dataUser[0]?.country}</p>
                            <h5>City/town:</h5>
                            <p>{dataUser[0]?.city}</p>
                        </div>
                    </div>
                    
                    <div className="list-answer">
                        <Answers/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
