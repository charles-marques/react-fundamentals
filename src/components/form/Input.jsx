import React, { useState } from "react"

export default (props) => {
    const [nome, setNome] = useState('')
    return (
        <>
            <h3>Nome: {nome}</h3>
            <input type="text" value={nome} placeholder="Insert here"
                onChange={e => setNome(e.target.value)}/>
        </>
    )
}