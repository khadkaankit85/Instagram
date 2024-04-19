
const LoginBox = () => {
    return (
        <div className="w-[24vw] h-[48vh] border border-solid border-black">

            <figure className="w-[100%] h-[20%] m-auto" >
                <img src="https://imgs.search.brave.com/oHIyJl_q8S3gQulsemXNV7ftBQmTTj9gx6d_CgWOeDg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LmluZm8vaW1h/Z2VzL2Njb3ZlcnMv/MTUyMjQ1Mjc2Mklu/c3RhZ3JhbS1sb2dv/LXBuZy10ZXh0LnBu/Zw" className="w-[80%] m-auto" alt="" />
            </figure>


            <form action="https://localhost:3500" method="POST" id="loginForm">
                <input type="text" name="username" placeholder="Enter Your Username" />
                <input type="text" name="password" placeholder="Enter Your password" />

                <button className="border border-solid px-1 m-auto text-center" type="submit" form="loginForm" >
                    Login
                </button>
            </form>

        </div>
    )
}

export default LoginBox
