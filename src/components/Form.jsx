import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import "../styles/Form.css";

function Form({ route, method }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setToken, setUser } = useAuth();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        api.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("token");

        try {
            const res = await api.post(route, { username, password });
            if (method === "signin") {
                const token = res.data.auth_token;
                setToken(token);
                api.defaults.headers.common["Authorization"] = "Token " + token;

                const user_res = await api.get("/api/v1/userprofile/get_user_info/");
                setUser({
                    'user_id': user_res.data.id,
                    'username': user_res.data.username,
                    'full_name': user_res.data.get_full_name
                });

                navigate("/lobby");
            } else {
                navigate("/signin");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const name = method === "signin" ? "Sign In" : "Sign Up";
    const forgotPasswordLink = method === "signin" ? (
        <a href="/signin">Forgot Password?</a>
    ) : null;
    const signUpLink = method === "signin" ? (
        <a href="/signup">Sign Up</a>
    ) : (
        <p className="centered-link">Have an account? <a href="/signin">Sign In</a></p>
    );

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <a><img src="circlechat_logo.png" alt="CircleChat Logo"/></a>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit" disabled={loading}>
                {loading ? "Loading..." : name}
            </button>
            <div className="form-links">
                {forgotPasswordLink}
                {signUpLink}
            </div>
        </form>
    );
}

export default Form