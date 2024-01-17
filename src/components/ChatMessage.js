import React from "react";

function ChatMessage({sender, message}) {
    return (
        <div className="ChatMessage">
            {sender}: {message}
        </div>
    );
}

export default ChatMessage;