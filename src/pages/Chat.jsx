import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarLogged from '../components/NavbarLogged';
import { useAuth } from "../contexts/AuthContext";
import styles from '../styles/Chat.module.scss';
import api from '../api';
import timeago from 'timeago-simple';

function Chat() {
    const { state, setChatroom } = useAuth();
    const [content, setContent] = useState('');
    const chatroom_id = useParams().chatId;
    const [messages, setMessages] = useState([]);
    const connectionRef = React.useRef(null); // Use a ref to store the WebSocket connection

    const getMessages = () => {
        api.post('/api/v1/messages/get_messages/' + chatroom_id + '/')
            .then(response => {
                console.log(response.data);
                const formattedMessages = response.data.map(msg => ({
                    chatroom: msg.chatroom,
                    content: msg.content,
                    created_at: msg.created_at,
                    created_by: msg.created_by.username,
                    time_since: timeago.simple(msg.created_at)
                }));
                setMessages(formattedMessages);
                setTimeout(() => {
                    convertTimeSince();
                    scrollToBottom();
                }, 50);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const sendMessage = () => {
        if (content.length > 0) {
            console.log("Message: " + content);

            connectionRef.current.send(JSON.stringify({
                'content': content,
                'chatroom': state.chatroom.id,
                'user_id': state.user.id,
            }));

            setContent('');
        }
    };

    const convertTimeSince = () => {
        setMessages(prevMessages =>
            prevMessages.map(msg => ({
                ...msg,
                time_since: timeago.simple(msg.created_at)
            }))
        );
        setTimeout(() => {
            convertTimeSince();
        }, 1000);
    };

    const scrollToBottom = () => {
        let messagesDiv = document.getElementById("messages");
        if (messagesDiv) {
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    };

    useEffect(() => {
        api.post(`/api/v1/chatrooms/get_chatroom/${chatroom_id}/`)
            .then(response => {
                console.log(response.data);
                setChatroom(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        connectionRef.current = new WebSocket(
            `ws://127.0.0.1:8000/ws/room_name/?token=${localStorage.getItem('token')}`
        );

        connectionRef.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const message = {
                content: data.content,
                created_by: data.user_id,
                created_at: new Date(),
                time_since: '',
            };
            setMessages(prevMessages => [...prevMessages, message]);
            setTimeout(() => {
                convertTimeSince();
                scrollToBottom();
            }, 50);
        };

        connectionRef.current.onopen = () => {
            console.log("Success connection");
            getMessages();
        };

        connectionRef.current.onclose = () => {
            console.log("Success disconnection");
        };

        return () => {
            connectionRef.current.close();
        };
    }, [chatroom_id, setChatroom]);

    return (
        <div className={styles.chatContainer}>
            <NavbarLogged />

            <div className={styles.chatWrapper}>
                <div className={styles.sidebar}>
                    <div className={styles.roomName}>
                        Welcome to {state.chatroom.name}!
                        <div className={styles.roomSubtitle}>
                            {state.chatroom.description}
                        </div>
                    </div>
                </div>

                <div className={styles.chatMain}>
                    <div className={styles.messages} id="messages">
                        {messages.map((message, index) => (
                            <div key={index} className={styles.message}>
                                <div className={styles.messageUser}>
                                    {message.created_by === state.user.username ? `${message.created_by} (You)` : message.created_by}
                                </div>
                                <div className={styles.messageTime}>
                                    {message.time_since}
                                </div>
                                <div className={styles.messageContent}>
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.messageInput}>
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button
                            onClick={() => {
                                sendMessage();
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;