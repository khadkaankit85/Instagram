import { useRef } from "react"
import { Bounce, toast, ToastContainer } from "react-toastify"
import { useSelector } from "react-redux"
import ThemeToggle from "../Components/ThemeToggle"


const VerifyEmail = () => {
    const theme = useSelector((state) => state.theme.value)


    const OTP = useRef({
        val1: "",
        val2: "",
        val3: "",
        val4: "",
        val5: ""
    })

    const handleClick = (e) => {
        let key = e.key
        let previousElement = e.currentTarget.previousElementSibling
        let nextElement = e.currentTarget.nextElementSibling
        console.log("cliecked", key)
        if (key == "Backspace") {
            if (!e.currentTarget.value === "") {
                if (previousElement) {
                    // previousElement.focus()
                }
            }
            else {
                if (previousElement) {
                    previousElement.focus()
                }
            }

        }

        if (key == "ArrowLeft") {
            if (previousElement) {
                previousElement.focus()
            }

        }
        if (key == "ArrowRight") {
            if (nextElement) {
                nextElement.focus()
            }
        }


    }


    const handleChange = (e) => {
        let field = e.target.name
        let fieldValue = e.target.value
        let next = e.target.nextElementSibling

        if (isNaN(fieldValue)) {
            console.log("letter found in num input")
            fieldValue = ""

        }

        if (fieldValue.length === 0) {
            OTP.current = {
                ...OTP.current,
                [field]: fieldValue
            }
            e.target.value = OTP.current[field]
            // if (next) {
            //     next.focus()
            // }

        }

        else if (fieldValue.length >= 1) {
            OTP.current = {
                ...OTP.current,
                [field]: fieldValue[fieldValue.length - 1]
            }
            e.target.value = OTP.current[field]

            if (next) {
                next.focus()
            }
        }


        console.log(OTP.current)
        // handleChange(e)

    }

    // const handleKeyUp=(e)=>{

    // }

    return (
        <div className="w-[100vw] h-[calc(100vh-6rem)]">
            <ThemeToggle />

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
            <main className="w-[89vw] mx-auto h-[90vh] border border-solid md:w-[500px] lg:-[40vw] mt-6 flex justify-between flex-col" >
                <div>
                    <h1 className="text-white text-3xl mt-9 ml-5">
                        Enter Code
                    </h1>
                    <h3 className="text-white mt-3 ml-5">We sent an email with <span className="text-yellow-500 ">OTP</span> to your account</h3>
                    <form action="" id="otpForm">
                        <input name="val1" type="text" className=" w-12 h-14 ml-5 mt-5 text-5xl text-center appearance-none" onChange={(e) => { handleChange(e) }} onKeyUp={(e) => (handleClick(e))} />
                        <input name="val2" type="text" className="w-12 h-14 ml-5 mt-5 text-5xl text-center" onKeyUp={(e) => (handleClick(e))} onChange={
                            (e) => {

                                handleChange(e)
                            }
                        } />
                        <input name="val3" type="text" className="w-12 h-14 ml-5 mt-5 text-5xl text-center" onChange={
                            (e) => {
                                handleChange(e)
                            }
                        } onKeyUp={(e) => (handleClick(e))} />
                        <input name="val4" type="text" className="w-12 h-14 ml-5 mt-5 text-5xl text-center" onChange={
                            (e) => {
                                handleChange(e)
                            }
                        } onKeyUp={(e) => (handleClick(e))} />
                        <input name="val5" type="text" className="w-12 h-14 ml-5 mt-5 text-5xl text-center" onChange={
                            (e) => {
                                handleChange(e)
                            }
                        } onKeyUp={(e) => (handleClick(e))} />

                    </form>

                </div>

                <button className="w-[80%] h-6 bg-white mx-auto p-7 flex justify-center items-center mb-11 text-2xl text-center text-white-600 active:bg-[#9b9696]" onClick={async () => {
                    let otpToSubmit = Object.values(OTP.current).join("")
                    if (otpToSubmit.length != 5) {
                        console.log("toast needs to be fired")

                        toast.warning('Please make sure that the OTP is long enough', {
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
                        try {

                            let response = await fetch("http://localhost:3500/otp/verifyOtp", {
                                method: "POST",
                                headers: {
                                    'Content-type': 'application/json'

                                },
                                body: JSON.stringify(OTP.current)
                            })


                            console.log(otpToSubmit.length, "=", otpToSubmit)


                            if (response.ok) {

                                toast.info('Account created Succcessfully, redirecting to login page in 5 seconds', {
                                    position: "top-right",
                                    autoClose: true,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    theme: theme == "darkTheme" ? "dark" : "light",
                                })
                                setTimeout(() => {
                                    window.location = "/login"

                                }, 4000);
                            }



                        }
                        catch (e) {
                            console.log(e)
                            console.log("unable to verify the otp")
                        }
                    }

                }}>
                    <span className="text-black text-center" >
                        Verify</span>
                </button>

            </main>




            {/* <h1>
                Please Enter your otp here
            </h1>
            <input type="number" />
            <button onClick={async () => {
                let response = await fetch("http://localhost:3500/otp/verifyOtp", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify('otp js file')
                })

                if (!response.ok) {
                    console.log("response is not ok")
                }
                if (response.ok) {
                    console.log("response is ok")
                }
            }}>
                Submit email
            </button> */}

        </div>
    )
}

export default VerifyEmail
