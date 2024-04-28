import { useAuth0 } from "@auth0/auth0-react"


const CreateAccount = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0()
    if (isLoading) {
        return (

            <h1>Fetching the data....</h1>
        )
    }
    if (user || isAuthenticated) {
        try {
            async () => {

                let response = await fetch("http://locahost:3000/authenticate/signup")
                if (!response.ok) {
                    console.log("error while creating the account")
                }
                if (response.ok) {
                    return (
                        <h1>Acccount created successfully, please go back to <a href="/login">log in </a> </h1>
                    )
                }
            }
        } catch (e) {
            console.log(e)

        }


        return (
            <div>
                Please wait while we create an account just for you
                <button onClick={() => {
                    logout()
                }}>
                    logout
                </button>
            </div>

        )
    }
}

export default CreateAccount
