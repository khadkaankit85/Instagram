import { useAuth0 } from "@auth0/auth0-react"
const Login = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <div>
            <button onClick={() => {
                loginWithRedirect()
            }}>
                Loginto autho
            </button>
        </div>
    )
}

export default Login
