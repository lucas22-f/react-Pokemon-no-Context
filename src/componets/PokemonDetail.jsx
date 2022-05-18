import React from 'react'
import {Container} from "react-bootstrap"

function PokemonDetail({ name:{english}, base }) {
  return (
    <Container className='m-5'>
        <h2>{english}</h2>
        <table>
          <tbody>
            {Object.keys(base).map((key)=>
                <tr key={key}> 
                    <td>{key}:</td>
                    <td>{base[key]}</td>
                 </tr>
            )}      
        </tbody>  
        </table>
    </Container>
  )
}

export default PokemonDetail