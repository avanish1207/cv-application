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
                        <h2>Enter Education Qualifications</h2>
                        <label htmlFor="college">Enter University Name</label>
                        <input type="text" id="college" name="college" value={text.college} onChange={handleChange}/>
                        <label htmlFor="year">Enter Year of Graduation</label>
                        <input type="number" id="year" name="year" value={text.year} onChange={handleChange}/>
                        <label htmlFor="cgpa">Enter CGPA(Out of 10)</label>
                        <input type="number" id="cgpa" name="cgpa" min="0" max="10" step="0.01" value={text.cgpa} onChange={handleChange}/>
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