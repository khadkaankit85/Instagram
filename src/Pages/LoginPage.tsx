import LoginBox from '../Components/LoginBox';
import ThemeToggle from '../Components/ThemeToggle'
import { Bounce, ToastContainer } from 'react-toastify';

function LoginPage() {

    return (
        <>
            <div className=" h-[100vh] w-[100vw] " >
                <ThemeToggle />
                <div className='mx-auto w-[100vw] p-10 '>
                    <LoginBox />

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

export default LoginPage
