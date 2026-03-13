import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

function App() {

  const [user, setUser] = useState(null);

  function handleLogin(userData) {
    setUser(userData);
  }

  return (
    <>
      {!user
        ? <LoginPage onLogin={handleLogin} />
        : <ChatPage user={user} />
      }
    </>
  );

}

export default App;