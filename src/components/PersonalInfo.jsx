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
                        <h2>Enter Personal Information</h2>
                        <label htmlFor="name">Enter Full Name</label>
                        <input type="text" id="name" value={text.name} name="name" onChange={handleChange}/>
                        <label htmlFor="email">Enter Email ID</label>
                        <input type="text" id="email" value={text.email} name="email" onChange={handleChange}/>
                        <label htmlFor="phone">Enter Phone Number</label>
                        <input type="number" id="phone" value={text.phone} name="phone" onChange={handleChange}/>
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