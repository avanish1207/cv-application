import "./Education.css";
import { useState } from "react";

function Education(){
    const [text, setText]= useState({
        college:"",
        year:"",
        cgpa:""
    });
    const [display, setDisplay]=useState({});
    const [editing, setEditing]=useState(true);

    const handleChange=(e)=>{
        const {name, value}=e.target;

        setText(prevText=> ({
            ...prevText, [name]: value
        }))
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
                editing?(
                    <div>
                        <input type="text" name="college" value={text.college} onChange={handleChange}/>
                        <input type="text" name="year" value={text.year} onChange={handleChange}/>
                        <input type="text" name="cgpa" value={text.cgpa} onChange={handleChange}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ):(
                    <div>
                        <div>{display.college}</div>
                        <div>{display.year}</div>
                        <div>{display.cgpa}</div>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )
            }

        </div>
        
    );
}

export default Education;