import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://www.localhost:3001/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])
    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nom</th>
                            <th>prix</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((produit, index) => {
                            return <tr key={index}>
                                <td>{produit.id}</td>
                                <td>{produit.nom}</td>
                                <td>{produit.prix}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Home