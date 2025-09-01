import "./Experience.css"
import { useState } from "react";

function Experience(){
    const [text, setText]=useState({
        company: '',
        startDate: '',
        endDate: ''
    });
    const [display, setDisplay]=useState({});
    const [editing, setEditing]=useState(true);

    const handleChange=(e)=>{
        const {name, value}=e.target;

        setText(prevText=>({
            ...prevText, [name]:value
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
                        <input type="text" name="company" value={text.company} onChange={handleChange}/>
                        <input type="text" name="startDate" value={text.startDate} onChange={handleChange}/>
                        <input type="text" name="endDate" value={text.endDate} onChange={handleChange}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ):(
                    <div>
                        <div>{display.company}</div>
                        <div>{display.startDate}</div>
                        <div>{display.endDate}</div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default Experience;