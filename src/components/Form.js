import React, {useState} from 'react';
import '../App.css';

const Form = ( {submit} ) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)

    const formSubmit = (e) => {
        e.preventDefault()
        submit(name, email)
    }

    return (
        <div class="col-md-6">
            <div id="logbox">
        <form onSubmit={formSubmit}>
            <input name="user[name]" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" pattern="^[\w]{3,16}$" autofocus="autofocus" required="required" class="input pass" />
            <input name="user[email]" type="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Email address" class="input pass" />
            <input type="submit" value="Contact Us" class="inputButton" />
            <div class="text-center">
            By submitting my information I agree to the terms and conditions described in the privacy statement regarding the use of my personal data and the use of cookies.
            </div>
        </form>
        </div>
        </div>

    )
}

export default Form
