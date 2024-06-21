import React from "react"
import { 
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom"
import Home from "./pages/Home" 
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Lobby from "./pages/Lobby"
import AddChatroom from "./pages/AddChatroom"
import Chat from "./pages/Chat"
import Faq from "./pages/Faq"
import { AuthProvider } from "./contexts/AuthContext";

function SignUpAndSignOut () {
  localStorage.clear();
  return <SignUp/>
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUpAndSignOut/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/lobby" element={<Lobby/>}/>
          <Route path="/lobby/add_chatroom" element={<AddChatroom/>}/>
          <Route path="/chat/:chatId" element={<Chat/>}/>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App