import NavbarLogged from "../components/NavbarLogged"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/AddChatroom.module.css";

function AddChatroom () {
    const [roomName, setRoomName] = useState("");
    const [roomDescription, setRoomDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
    
        if (roomName.length > 0) {
            api
                .post('/api/v1/chatrooms/create_chatroom/', { name: roomName, description: roomDescription })
                .then(response => {
                    console.log(response);
                    navigate('/lobby');
                })
                .catch(error => {
                    console.log(JSON.stringify(error));
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };    

    return <div>
        <NavbarLogged/>
        <form onSubmit={handleSubmit} className="form-container">
            <h1>New Chatroom</h1>
            <input
                className="form-input"
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Name"
            />
            <input
                className="form-input"
                type="text"
                value={roomDescription}
                onChange={(e) => setRoomDescription(e.target.value)}
                placeholder="Description"
            />
            <button className="form-button" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Create"}
            </button>
        </form>
    </div>
}

export default AddChatroom