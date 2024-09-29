// Important: this page is going to include signup box and create account box

import SignupBox from "../Components/SignupBox"
import ThemeToggle from '../Components/ThemeToggle'
import { Bounce, ToastContainer } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react"
import CreateAccount from "../Components/CreateAccount";


function SignupPage() {
    const { user } = useAuth0()


    return (
        <>
            <div className=" h-[100vh] w-[100vw] " >
                <ThemeToggle />
                <div className='mx-auto w-[100vw] p-10 '>
                    {!user ? <SignupBox /> : <CreateAccount />}


                    <ToastContainer

                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Bounce}
                    />
                </div>

            </div >
        </>
    )
}

export default SignupPage
