import "./PersonalInfo.css"
import { useState } from "react";

function PersonalInfo(){
    const [text, setText] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [display, setDisplay] = useState({});
    const [editing, setEditing] = useState(true);

    const handleChange=(e)=>{
        const {name, value}=e.target;

        setText(prevState=>({
            ...prevState, [name]:value
        }));
    }

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
                        <input type="text" value={text.name} name="name" onChange={handleChange}/>
                        <input type="text" value={text.email} name="email" onChange={handleChange}/>
                        <input type="text" value={text.phone} name="phone" onChange={handleChange}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ):
                (
                    <div>
                        <div>{display.name}</div>
                        <div>{display.email}</div>
                        <div>{display.phone}</div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default PersonalInfo;