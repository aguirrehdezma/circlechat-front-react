import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import NavbarLogged from '../components/NavbarLogged';
import styles from "../styles/Lobby.module.css";
import api from "../api";

function Lobby() {
    const [rooms, setRooms] = useState([]);

    const getChatrooms = async () => {
        try {
            const res = await api.get('/api/v1/chatrooms/get_chatrooms/');
            setRooms(res.data);
        } catch (error) {
            console.error("Error fetching chatrooms:", error);
        }
    };

    useEffect(() => {
        getChatrooms();
    }, []);

    return (
        <div>
            <NavbarLogged />
            <Container className={styles.lobbyContainer}>
                <div className={styles.buttonContainer}>
                    <button className={styles.createButton}>
                        <Link to="/lobby/add_chatroom">
                            + Create Chatroom
                        </Link>
                    </button>
                </div>
                <Grid container spacing={3}>
                    {rooms.map((room) => (
                        <Grid item xs={12} sm={6} md={4} key={room.id}>
                            <Card className={styles.card}>
                                <CardContent>
                                    <Typography variant="h5" component="div">
                                        {room.name}
                                    </Typography>
                                    <button variant="contained" className={styles.button}>
                                        <Link to={`/chat/${room.id}`}>
                                            Join
                                        </Link>
                                    </button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Lobby