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
                    <div className="experience">
                        <h2>Enter Professional Experience</h2>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id="company" name="company" value={text.company} onChange={handleChange}/>
                        <label htmlFor="startDate">Start Date</label>
                        <input type="date" id="startDate" name="startDate" value={text.startDate} onChange={handleChange}/>
                        <label htmlFor="endDate">End Date</label>
                        <input type="date" id="endDate" name="endDate" value={text.endDate} onChange={handleChange}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
                ):(
                    <div className="experience-display">
                        <h3>Experience</h3>
                        <div className="company">{display.company}</div>
                        <div className="details">{display.startDate}</div>
                        <div className="details">{display.endDate}</div>
                        <button className="edit-btn" onClick={handleEdit}>Edit</button>
                    </div>
                )
            }
        </div>
    );
}

export default Experience;