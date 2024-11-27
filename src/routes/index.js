import { Children } from "react";
import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Answers from "../pages/Answers";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Topic from "../pages/Topics";
import Logout from "../pages/Logout";
import Account from "../pages/account";
import EditProfile from "../pages/EditProfile";


export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "logout",
                element: <Logout />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "answers",
                        element: <Answers />
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz />
                    },
                    {
                        path: "editProfile/:id",
                        element: <EditProfile />
                    },
                    {
                        path: "result/:id",
                        element: <Result />
                    },
                    {
                        path: "topic",
                        element: <Topic />
                    },
                    {
                        path: "account",
                        element: <Account />
                    },
                    
                ]
            },
        ]
    }
];