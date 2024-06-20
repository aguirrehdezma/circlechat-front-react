import React, { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
    user: {
        id: null,
        username: null,
        full_name: null,
        isAuthenticated: false,
        token: null,
    },
    chatroom: {
        id: null,
        name: "",
    },
};

const AuthContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case "INITIALIZE_STORE":
            return {
                ...state,
                user: {
                    ...state.user,
                    token: localStorage.getItem("token"),
                    id: localStorage.getItem("user_id"),
                    username: localStorage.getItem("user_username"),
                    full_name: localStorage.getItem("user_full_name"),
                    isAuthenticated: !!localStorage.getItem("token"),
                },
            };
        case "SET_TOKEN":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload.token,
                    isAuthenticated: true,
                },
            };
        case "REMOVE_TOKEN":
            localStorage.removeItem("token");
            localStorage.removeItem("user_id");
            localStorage.removeItem("user_username");
            localStorage.removeItem("user_full_name");
            return {
                ...state,
                user: {
                    id: null,
                    username: null,
                    full_name: null,
                    isAuthenticated: false,
                    token: null,
                },
            };
        case "SET_USER":
            localStorage.setItem("user_id", action.payload.user_id);
            localStorage.setItem("user_username", action.payload.username);
            localStorage.setItem("user_full_name", action.payload.full_name);
            return {
                ...state,
                user: {
                    ...state.user,
                    id: action.payload.user_id,
                    username: action.payload.username,
                    full_name: action.payload.full_name,
                },
            };
        case "SET_CHATROOM":
            return {
                ...state,
                chatroom: {
                    id: action.payload.id,
                    name: action.payload.name,
                },
            };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        dispatch({ type: "INITIALIZE_STORE" });
    }, []);

    const setToken = (token) => {
        dispatch({ type: "SET_TOKEN", payload: { token } });
    };

    const removeToken = () => {
        dispatch({ type: "REMOVE_TOKEN" });
    };

    const setUser = (user) => {
        dispatch({ type: "SET_USER", payload: user });
    };

    const setChatroom = (chatroom) => {
        dispatch({ type: "SET_CHATROOM", payload: chatroom });
    };

    return (
        <AuthContext.Provider
            value={{ state, setToken, removeToken, setUser, setChatroom }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
