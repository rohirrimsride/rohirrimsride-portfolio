import React, { useState } from "react";

function Contact() {
    const [validName, setValidName] = useState({ name: '' })
    const [validEmail, setValidEmail] = useState({ email: '' });
    const [validMessage, setValidMessage] = useState({ message: '' });

    const isValidName = (name => {
        return /[a-zA-Z]/.test(name)
    })
    const isValidEmail = (email => {
        return /\S+@\S+\.\S+/.test(email)
    });
    const isValidMessage = (message => {
        return /[a-zA-z0-9!@#$%^&*()]/.test(message);
    })

    const checkName = event => {
        if (!isValidName(event.target.value)) {
            setError('Please provide a name');
        } else {
            setError(null);
        }
        setValidName(event.target.value);
    }
    const checkEmail = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }
        setValidEmail(event.target.value);
    };
    const checkMessage = event => {
        if (!isValidMessage(event.target.value)) {
            setError('Please add a message');
        } else {
            setError(null);
        }
        setValidMessage(event.target.value);
    }
    
    const [error, setError] = useState(null);

    return (
        <div className="contactContainer">
            <div className="section-title-container">
                <h2 className="section-title-contact">Contact</h2>
            </div>
            <form className="contactForm">
                <label for="name">Name:</label>
                <input type="text" id="name" onBlur={checkName} name="name" className="contactInput" />

                <label for="email">Email:</label>
                <input type="text" id="email" onBlur={checkEmail} name="email" className="contactInput" />

                <label for="message">Message:</label>
                <textarea id="message" onBlur={checkMessage} name="message" cols="30" rows="15" className="contactInput"></textarea>
                {error && <h4 className="error">{error}</h4>}
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Contact;