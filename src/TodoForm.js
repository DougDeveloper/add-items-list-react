import React, { useState } from 'react'

function TodoForm(props){

    const [text, setText] = useState("") // após isso precisamos adicionar o primeiro elemento

    //esta função impede que o formulário tente enviar o que é inserido no input
    function addItem(event){
        event.preventDefault()
        // este if irá impedir de colocar item vazio ao pressionar o botão Add
        if(text){
            props.onAddItem(text)
            setText("")
        }
    }

    // capturando o valor do texto inserido no input
    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    
    return(
        <form>
            <input onChange={handleChange} type='text' value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm