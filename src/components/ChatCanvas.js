import React from "react";

const ChatCanvas = ({username}) => {
    return (
        <div className="ChatCanvas">
            <header className="ChatCanvas-header">
                {username}
            </header>
        </div>
    );
}

export default ChatCanvas;