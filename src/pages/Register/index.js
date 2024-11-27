import { generationToken } from "../../helper/generateToken";
import { checkExits, register } from "../../services/userService";
import {useNavigate} from  "react-router-dom";
import "./Register.css";

function Register() {
  
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName= e.target[0].value;
        const email= e.target[1].value;
        const password = e.target[2].value;

        const checkExitsEmail = await checkExits( "email", email);
        if(checkExitsEmail.length > 0){
            alert( "Email đã tồn lại")
        } else{

            const options = {
                fullName: fullName,
                email: email,
                password: password,
                token: generationToken(),
            };
            const response = await register(options);
            if (response){
            
                navigate("/login");
            } else {
                console.log(response);
                alert("Đăng kí không thành công!")
            }
        }

        

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="form-register">
                        <h2 className="section-title">Đăng ký</h2>
                        <div>
                            <input type="fullname"placeholder="Nhập họ và tên"></input>
                        </div>
                        <div>
                            <input type="email"placeholder="Nhập email"></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Nhập mật khẩu"></input>
                        </div>
                        <button className="btn form-register__btn" type="submit">
                            Đăng ký
                        </button>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default Register;