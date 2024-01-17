import './App.css';
import React, { useState } from "react";
import {
  StompSessionProvider,
  useStompClient,
  useSubscription,
  withStompClient,
  withSubscription
} from "react-stomp-hooks";

import ChatPage from "./components/ChatPage";

const App = () => {
  return (
    <>
      <StompSessionProvider
        url="http://localhost:8080/ws"
      ></StompSessionProvider>
      <div className="App">
        <header className="App-header">
          <ChatPage />
        </header>
      </div>
    </>
  );
}

export default App;
