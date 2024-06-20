import Form from "../components/Form"
import NavbarNonLogged from "../components/NavbarNonLogged"

function SignUp() {
    return <div>
        <NavbarNonLogged/>
        <Form route="/api/v1/users/" method="signup" />
    </div>
}

export default SignUp