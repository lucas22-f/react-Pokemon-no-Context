import { useState, useEffect } from "react"
import { Container, Table } from "react-bootstrap"
import PokemonDetail from "./componets/PokemonDetail";
import PokemonRow from "./componets/PokemonRow";
import PokemonSearch from "./componets/PokemonSearch";
import pokeLogo from "./pokeLogo.png"

function App() {
  const [data, setData] = useState([]);
  const [filter,setFilter] = useState("");
  const [selectedPokemon,setSelectedPokemon] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <>
      <Container>

      <Container className="d-flex align-items-center justify-content-between">
        <img src={pokeLogo} alt="xd" />
            <Row>
                <h1 >Pokemon Finder</h1> 
            </Row>

        </Container>
        <div>
            <PokemonSearch filter={filter} setFilter={setFilter}></PokemonSearch>
          
        <div style={{
          display: "grid",
          gridTemplateColumns: "80% 20%",
          gridColumnsGap: "3em"
        }}>
          

          <Table width="100%">
          <thead>
           <tr>
              <th>NAME</th>
              <th>TYPE</th>
           </tr>
           </thead>
           <tbody>
             
             {data.filter(({name:{english}})=> english.toLowerCase().includes(filter.toLocaleLowerCase()) )
             .slice(0,14)
             .map((pokemon) =>
              <PokemonRow 
              key={pokemon.id}
              pokemon={pokemon} 
              onDetail={(pokemon)=> setSelectedPokemon(pokemon)}
               
               />)}

           </tbody>
          </Table>
          <div>
          {selectedPokemon && <PokemonDetail {...selectedPokemon}></PokemonDetail>}
          </div>

        </div>
        
        </div>
      </Container>


    </>
  )
}

export default App
