import "./PersonalInfo.css"
import { useState } from "react";

function PersonalInfo(){
    const [text, setText] = useState("");
    const [display, setDisplay] = useState("");
    const [editing, setEditing] = useState(true);
    const handleSubmit=()=>{
        setDisplay(text);
        setEditing(false);
    }

    const handleEdit=()=>{
        setText(display);
    setEditing(true);
    }

    return(
        <div>
            {
                editing ? (
                    <div>
                        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ):
                (
                    <div>
                        <div>{display}</div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default PersonalInfo;