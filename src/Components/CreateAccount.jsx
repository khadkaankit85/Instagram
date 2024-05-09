import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"


const CreateAccount = () => {
    const { user, logout } = useAuth0()
    const [accountCreated, setaccountCreated] = useState(false)
    const [badResponse, setbadResponse] = useState(false)
    if (user) {
        console.log(user)
    }

    useEffect(() => {


        async function createAccount() {



            let response = await fetch("http://localhost:3500/authenticate/signup/", {
                method: "POST",
                headers: {
                    //mentioning content type is important so that express can easily understand the data type
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            if (!response.ok) {
                setbadResponse(true)
                console.log("error while creating the account")
            }
            if (response.ok) {
                setaccountCreated(true)
                setbadResponse(false)
                console.log("accountCreated")
            }


        }
        if (user) {
            createAccount()
        }


    }, [user])


    if (!user) {
        return (<>
            <h1 className="text-white">
                Couldnt create account, unauthorised page
            </h1>
        </>)
    }





    return (
        <>
            <div>
                {
                    badResponse && <h1 className="text-white">
                        bad response  from server and couldnt process your request
                    </h1>
                }
                {accountCreated && <h1 className="text-white">Acccount created successfully, please go back to <a href="/login">log in </a> </h1>
                }
                {!accountCreated && user && (<div className="text-white">
                    Please wait while we create an account just for you
                    <br></br>

                    {user && <button onClick={() => {
                        logout({
                            logoutParams: {
                                returnTo: "http://localhost:5173/signup"
                            }
                        })
                    }}>
                        logout
                    </button>}
                </div>)

                }


            </div>

        </>
    )
}

export default CreateAccount
