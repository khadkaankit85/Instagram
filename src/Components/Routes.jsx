//let's import pages  here:
import LoginPage from '../Pages/LoginPage'
import SignupPage from '../Pages/SignupPage'
import Home from '../Pages/Home'
import { createBrowserRouter } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import VerifyEmail from '../Pages/VerifyEmail'

//lets create routers :)
export const myRouter = createBrowserRouter([
    {
        path: "/signup",
        element: <SignupPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/home/*",
        element: <Home />
    }, {
        path: "/createaccount",
        element: <CreateAccount />
    }, {
        path: "/emailverification",
        element: <VerifyEmail />
    },
    {
        path: "*",
        element: <h1 className='text-red-600 p-10'>Page not found</h1>

    }
])
