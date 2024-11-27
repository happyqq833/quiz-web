import { setCookie } from "../../helper/cookie";
import { login } from "../../services/userService";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { checkLogin } from "../../actions/login";
import "./Login.css";

function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email= e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);
        if (response.length > 0){
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/Topic");
        } else {
            console.log(response);
            alert("Sai tài khoản hoặc mật khẩu!")
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                
                <div className="container">
                    <div className="form-login">
                        <div>
                            <h2 className="section-title">Đăng nhập</h2>
                            <input type="email"placeholder="Nhập email"></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Nhập mật khẩu"></input>
                        </div>
                        <button className="btn form-login__btn" type="submit">
                            Đăng nhập
                        </button>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default Login;