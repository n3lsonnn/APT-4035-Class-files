import React from "react";
import {useState} from "react"; 

function Contact() {
    
    const [data, setData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const serverHost = 'http://localhost:4000';

    async function addStudent(student) {
        const url = serverHost + '/students';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(student)
        }
        const response = await fetch(url, options);
        if (response.status === 200) {
            setSubmitted(true);
        }
    }

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
        addStudent(data);
        e.preventDefault();
    }

    return(
        <div>
            <h1>This is the Contact page</h1>
            {!submitted ?

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

            : 

            <p>Submission succesful</p>

            }
        </div>
    );
}

export default Contact;