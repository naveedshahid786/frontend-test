import { useState, useEffect } from "react"
import axios from "axios"

const useAxios = (baseUrl) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const fetchData = async () => {
           try {
              axios.get(baseUrl)
                 .then((res) => {
                    setResponse(res.data);
                 })
           } catch (err) {
              setError(err);
           }
        };
  
        fetchData();
     }, [baseUrl]);

     return {response, error}

}

export default useAxios