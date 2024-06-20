import Form from "../components/Form"
import NavbarNonLogged from "../components/NavbarNonLogged"

function SignIn() {
    return <div>
        <NavbarNonLogged/>
        <Form route="/api/v1/token/login/" method="signin" />
    </div>
}

export default SignIn