import React from "react";
import {useState} from "react"; 

function Contact() {
    
    const [data, setData] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const currentInputFieldData = {
            [name]: value
        }

        const updatedData = {
            ...data,
            ...currentInputFieldData
        }
        setData(updatedData);
    }
    
    const handleSubmit = (e) => {
        console.log(data);
        e.preventDefault();
    }

    return(
        <div>
            <h1>This is the Contact page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ID Number:
                    <input name  = "idno" type ="number" onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Date of Birth:
                    <input name  = "dob" type ="text" onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Gender(m/f):
                    <input name  = "gender" type ="text" onChange={handleChange} />
                </label>
                <br/>
                <label>
                    Email:
                    <input name  = "email" type ="text" onChange={handleChange} />
                </label>
                <br/>
                <label>
                Is Enrolled(y/n):
                    <input name  = "gender" type ="text" onChange={handleChange} />
                </label>
                <br/>
                <input type = "submit" value = "submit" />
            </form>
        </div>
    );
}

export default Contact;