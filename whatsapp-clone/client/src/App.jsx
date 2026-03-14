/*import React from "react";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";
import { signOut } from "firebase/auth";


    function App() {
      const [user, setUser] = useState(null);

      useEffect(() => {
      onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser({
            name: firebaseUser.displayName,
            avatar: firebaseUser.photoURL,
            status: "online"
          });
        }else{
          setUser(null);
        }
      });
      return () => unsuscribe();
    }, []);
    if (!user) {
        return <LoginPage onLogin={setUser} />;
      }

      return <ChatPage user={user} setUser={setUser} />;

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

    function logout() {
      signOut(auth);
    }

export default App;*/
import React, { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";

import { auth } from "./services/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {

      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName,
          avatar: firebaseUser.photoURL,
          status: "online"
        });
      } else {
        setUser(null);
      }

    });

    return () => unsubscribe();

  }, []);

  if (!user) {
    return <LoginPage onLogin={setUser} />;
  }

  return <ChatPage user={user} setUser={setUser} />;

}

export default App;