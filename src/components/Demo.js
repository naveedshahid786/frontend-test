import React from 'react';
import '../App.css';
import useAxios from "../Hooks/useAxios"
import Form from "./Form"
import Axios from 'axios';

let backend = "http://localhost:1337/"

const Demo = () => {
    const { response, error } = useAxios("http://localhost:1337/demos")

    const handleSubmit = (name, email) => {
        Axios.post("http://localhost:1337/requests", {
            name, email
        }).then((res) => console.log(res))
        .catch((er) => console.log(er))
    }

    return (
        <div className="container">
            <div>
                {response ? <h1>{response[0].headline}</h1> : null}
                {response ? <p>{response[0].description}</p> : null}
            </div>
            <div className="image-demo">
                {response ? <img style={{ width: "100%" }} src={"http://localhost:1337" + response[0].media.formats.large.url}></img> : null}
            </div>
            <div className="form-demo">
                <Form submit={handleSubmit}/>
            </div>
        </div>
    );
};
export default Demo;