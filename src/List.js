import React from 'react'

import Todo from './Todo'

function List(props){
    
    return(
        <ul>
                {/* para modificar o que é inserido nesta lista temos que mudar seu estado. ln8 */}

                {/* pegamos o array [items] e o mapeamos para retornar uma linha dentro da lista. ln35*/}
                {props.items.map(item=> <li>{item}</li>)}
            </ul>
    )
}

export default List