import { Link, NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.css";
import { getCookie } from "../../helper/cookie";
import { useSelector } from "react-redux";
import loginReducer from "../../reducers/login";
import Logo from "../../img/sale.png";

function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);


    return(
        <>
            <div className="layout-defaul">
                <header className="layout-default__header">
                    <div className="layout-default__logo">
                        <Link to="/"><img src={Logo}></img></Link>
                        
                    </div>
                    <div className="menu">
                        <ul>
                            {/* <li>
                                <NavLink to="/" >
                                    Home
                                </NavLink>
                            </li> */}
                             
                            {token && (
                                <>
                                <li>
                                <NavLink to="/topic" >
                                    Topic
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/answers" >
                                        History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/account" >
                                        Account
                                    </NavLink>
                                </li>
                            </>
                            )}
                            
                        </ul>
                        <div className="layout-default__account">
                        {token ? (<>
                            <NavLink to="/logout">Đăng xuất</NavLink>
                        </>) : (<>
                            <NavLink to="login">Đăng nhập</NavLink>
                            <NavLink to="register">Đăng ký</NavLink>
                        </>)}
                    </div>
                    </div>
                
                    
                </header>
                <main className="layout-default__main"
                >
                    <Outlet/>
                </main>
                <footer className="layout-default__footer">Copyright @ 2024 by NNQuynh</footer>

            </div>
        </>
    );
}

export default LayoutDefault;