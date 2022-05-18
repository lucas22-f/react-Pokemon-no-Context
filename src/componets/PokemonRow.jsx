import React from 'react'
import { Button } from 'react-bootstrap'
function PokemonRow({pokemon ,onDetail}) {
  return (
    <>
    <tr>
        <td>{pokemon.name.english}</td>
        <td>{pokemon.type.join(", ")}</td>
        <td><Button variant='dark' onClick={()=>onDetail(pokemon)} >Detail</Button></td>
    </tr>
    </>
  )
}

export default PokemonRow