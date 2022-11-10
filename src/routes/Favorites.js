import React from "react";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Favorites(){
    return (
    <Container>
      <Row>
       
      </Row>
    </Container>
  );
}



export {Favorites}

































//import React, { useEffect, useState, useContext} from 'react';
// import Col from 'react-bootstrap/Col';
// import { PokemonCard } from '../components';
// import {FavoritesContext} from '../FavoritesProvider';


// function Favorites (name) {
// const { favorites } = useContext(FavoritesContext);

// useEffect(() => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setPokemon(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [name]);

//     return (
//        <>
//           {favorites.map((pokemon) => (
//             <Col key={pokemon}>
//               <PokemonCard name={pokemon} />
//             </Col>
//           ))}
//        </>
 
//     );
// };

// export {Favorites};