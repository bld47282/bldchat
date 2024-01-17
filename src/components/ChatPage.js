import React, { useState } from "react";

import ChatCanvas from "./ChatCanvas";
import LoginCanvas from "./LoginCanvas";

function ChatPage() {
    const [username, setUsername] = useState();

    return (
        <div className="ChatPage">
            <header className="ChatPage-header">
                {username ? <ChatCanvas username={username} /> : <LoginCanvas setUsername={setUsername} />}
            </header>
        </div>
    );
}

export default ChatPage;