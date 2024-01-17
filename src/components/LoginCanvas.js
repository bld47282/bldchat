import React, {useState} from "react";

const LoginCanvas = ({setUsername}) => {
    const [text, setText] = useState();

    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <div className="LoginCanvas">
                <input className="LoginInput" value={text} onChange={handleChange} />
                <button onClick={() => setUsername(text)}>Login</button>
        </div>
    );
}

export default LoginCanvas;