import { useRef, useState } from "react"
import darkInsta from "../Assets/Images/instagram-image-black.svg"
import lightInsta from "../Assets/Images/instagram-image-white.svg"
// useSelector hook from redux is used to access items from the redux store
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { useAuth0 } from "@auth0/auth0-react";
import 'react-toastify/dist/ReactToastify.css';

const SignupBox = () => {

    const { loginWithRedirect } = useAuth0();


    const theme = useSelector((state) => state.theme.value)
    console.log("the value of the theme coming from store is ", theme)

    const [isNotValidUsername, setisNotValidUsername] = useState(false)
    const [isNotValidPassword, setisNotValidPassword] = useState({
        noMinlength: false,
        noUppercase: false,
        noLowercase: false,
        noNumber: false,
        noSymol: false
    })
    const [isNotValidEmail, setisNotValidEmail] = useState(false)
    let userdetail = useRef({
        username: '',
        email: "",
        password: ''
    })

    const restrictedSymbols = ['!', '#', ' ', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '\\', '|'];
    const requiredSymbols = ['!', '@', '-', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?', '\\', '|'];


    const handleChange = (e) => {

        //to validate the username

        if (e.target.name === 'username') {
            const username = e.target.value;
            const containsRestrictedSymbol = restrictedSymbols.some(symbol => username.includes(symbol));

            //cannot start with a number, @ and cannot have some restricted symbols
            if (containsRestrictedSymbol || (!isNaN(username[0])) || username[0] == "@") {
                setisNotValidUsername(true)
                console.log("validity checked")
                // Handle the case here, like showing an error message
            } else {
                // Username does not contain any restricted symbol
                // Proceed with your logic
                setisNotValidUsername(false)

            }
        }

        //to validate the password we are going to check a set of requirements
        //test method is used for regex expressions
        if (e.target.name === 'password') {
            const password = e.target.value;
            // if length is greater than 7 then length is good
            const minLength = (password.length > 7)
            //if has uppercase only then its ok
            const hasUppercase = /[A-Z]/.test(password)
            //to check the lowercase
            const hasLowercase = /[a-z]/.test(password)
            //to check number's existence
            const hasNum = /[1-9]/.test(password)
            //to check for symbol
            //note that user needs to use those symbols that are banned in username
            const hasSymbol = requiredSymbols.some(symbol => password.includes(symbol));
            setisNotValidPassword({
                noMinlength: !minLength,
                noUppercase: !hasUppercase,
                noLowercase: !hasLowercase,
                noNumber: !hasNum,
                noSymbol: !hasSymbol

            })
        }

        if (e.target.name === 'email') {
            const email = e.target.value;
            // Regular expression to validate email format
            const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            setisNotValidEmail(!isValidEmail);
        }




        const name = e.target.name
        const value = e.target.value
        userdetail.current = {
            ...userdetail.current,
            [name]: value
        }
        console.log(userdetail)
    }

    return (
        <>
            <div className="login-form-div md:w-[40vw] md:h-[68vh] sm:w-[60%]  sm:[h-70vh] border border-solid rounded-3xl border-black mx-auto my-auto  lg:w-[40%] lg:h-[70vh] w-[70vw] h-[70vh]"  >



                {
                    <div>


                        {theme == "darkTheme" && <img src={darkInsta} width={"60%"} height={"10%"} className="mx-auto" alt="" />}
                        {theme == "lightTheme" && <img src={lightInsta} width={"60%"} height={"10%"} className="mx-auto " alt="" />}
                    </div>
                }


                <form className=" mx-auto flex justify-center items-center flex-col login-form-main">


                    <input type="text" name="username" placeholder="Enter Your Username" className="border border-solid border-black my-1 "
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />


                    {isNotValidUsername && <h3 className="mx-auto border-black text-red-400 text-sm">Oops! Not this symbol please</h3>}

                    <input type="text" name="email" placeholder="Enter Your Email" className="border border-solid border-black my-1 "
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />

                    {isNotValidEmail && <h3 className="mx-auto border-black text-red-400 text-sm">Email invalid</h3>}
                    {!isNotValidEmail && userdetail.current.email.length > 0 && <h3 className="mx-auto border-black text-green-400 text-sm">Email is Valid</h3>}

                    <input type="text" name="password" placeholder="Enter Your password" className="border border-solid border-black mx-auto my-1 "
                        onChange={(e) => {
                            handleChange(e)
                        }}
                    />
                    {/* now lets create different warning for each conditions  */}
                    {/* if doesn't satisfy min length requirement */}
                    {<div className="w-full p-3 md:text-center text-center">
                        {isNotValidPassword.noMinlength && <h3 className=" border-black text-red-400 text-sm">*Minimum length of the password is 8</h3>}
                        {isNotValidPassword.noLowercase && <h3 className=" border-black text-red-400 text-sm">*Password must contain  one Lowercase letter</h3>}
                        {isNotValidPassword.noUppercase && <h3 className=" border-black text-red-400 text-sm">*Password must contain one Uppercase letter</h3>}
                        {isNotValidPassword.noNumber && <h3 className=" border-black text-red-400 text-sm">*At least 1 number is required</h3>}
                        {isNotValidPassword.noSymbol && <h3 className=" border-black text-red-400 text-sm">*1 Symbol is must</h3>}

                        {/* if the password is valid */}

                        {userdetail.current.password.length > 0 && !isNotValidPassword.noMinlength && <h3 className=" border-black text-green-700 text-sm">*Minimum length of the password is 8</h3>}

                        {userdetail.current.password.length > 0 && !isNotValidPassword.noLowercase && <h3 className=" border-black text-green-700 text-sm">*Password must contain  one Lowercase letter</h3>}

                        {userdetail.current.password.length > 0 && !isNotValidPassword.noUppercase && <h3 className=" border-black text-green-700 text-sm">*Password must contain one Uppercase letter</h3>}

                        {userdetail.current.password.length > 0 && !isNotValidPassword.noNumber && <h3 className=" border-black text-green-700 text-sm">*At least 1 number is required</h3>}

                        {userdetail.current.password.length > 0 && !isNotValidPassword.noSymbol && <h3 className=" border-black text-green-700 text-sm">*1 Symbol is must</h3>}


                    </div>}




                    <button className={`px-3 py-1 m-auto text-center block bg-blue-700  rounded-md w-[256px] ${theme == "lightTheme" && "text-white"} `} type="button" onClick={async () => {

                        if (isNotValidUsername || isNotValidPassword.noLowercase || isNotValidPassword.noMinlength || isNotValidPassword.noNumber || isNotValidPassword.noUppercase || isNotValidPassword.noSymol) {
                            toast.error('Password is not valid', {
                                position: "top-right",
                                autoClose: true,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: theme == "darkTheme" ? "dark" : "light",
                            });
                            return
                        }
                        if (userdetail.current.password.length == 0 || userdetail.current.username.length == 0 || userdetail.current.email.length == 0) {
                            console.log("details are ", userdetail.current.email, userdetail.current.password, userdetail.current.username)
                            toast.warning('Oops! looks like you forgot to fill something', {
                                position: "top-right",
                                autoClose: true,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: theme == "darkTheme" ? "dark" : "light",
                            });
                            return
                        }
                        if (isNotValidEmail) {
                            toast.warning('Email does not look valid', {
                                position: "top-right",
                                autoClose: true,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: theme == "darkTheme" ? "dark" : "light",
                            })
                            return
                        }

                        try {
                            const response = await fetch("http://localhost:3500/authenticate/signup", {
                                method: "POST",
                                headers: {
                                    //mentioning content type is important so that express can easily understand the data type
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify(userdetail.current)
                            })
                            if (!response.ok) {

                                //for unauthorised resposestatus
                                if (response.status == 401) {
                                    toast.warning('Unauthorised, Please recheck your credentials', {
                                        position: "top-right",
                                        autoClose: true,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        theme: theme == "darkTheme" ? "dark" : "light",
                                    })
                                }

                                //for 
                                if (response.status == 401) {
                                    toast.warning('Unauthorised, Please recheck your credentials', {
                                        position: "top-right",
                                        autoClose: true,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        theme: theme == "darkTheme" ? "dark" : "light",
                                    })
                                }


                                else {
                                    toast.warning(`Error: ${response.statusText}`, {
                                        position: "top-right",
                                        autoClose: true,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        theme: theme == "darkTheme" ? "dark" : "light",
                                    })
                                }
                            }

                        }
                        catch (e) {
                            toast.warning('Oops! Unexpected things happened', {
                                position: "top-right",
                                autoClose: true,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                theme: theme == "darkTheme" ? "dark" : "light",
                            })
                        }

                    }} >
                        Sign Up
                    </button>

                </form>

                <div className="flex justify-between my-3 w-[256px] mx-auto items-center">
                    <div className="w-[44%] bg-black h-[1px] "></div>
                    OR
                    <div className="w-[44%] bg-black h-[1px] "></div>

                </div>
                <button className={`px-3 py-1 m-auto text-center block bg-blue-700  rounded-md w-[256px] ${theme == "lightTheme" && "text-white"} `} type="button" onClick={() => loginWithRedirect()}>Continue with google/ github</button>;

                <h3 className="text-center signup-text py-2" >  Already have an account?
                    <a href="https://google.com">Log In</a> </h3>


            </div>
        </>
    )
}

export default SignupBox
