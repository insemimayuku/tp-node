import axios from "axios";
//import React from "react";
import { useEffect, useState } from "react";

function CreateProduct() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return

}
export default CreateProduct

