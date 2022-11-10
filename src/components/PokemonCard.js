import React, { useEffect, useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'; 
import {FavoritesContext} from '../FavoritesProvider';
import  {Button}  from 'react-bootstrap';


function PokemonCard({ name }) {
  const { addFavorite } = useContext(FavoritesContext);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <Card style={{ width: '18rem' }} className='mx-auto'>
      <Card.Img
        width='286'
        height='286'
        bg='dark'
        variant='top'
        src={pokemon?.sprites.front_default}
      />
      <Card.Body>
        <Card.Title>
          <Link to={`/${name}`}>{name}</Link>
        </Card.Title>
        <Card.Text as='div'>
          Abilities:
          <ul>
            {pokemon?.abilities.map((ability) => (
              <li key={ability.ability.name}>
                <span key={ability.ability.name}>{ability.ability.name}</span>
              </li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="primary" onClick={() => addFavorite(name)}>
        Add to Favorites
      </Button>
      </Card.Body>
    </Card>
  );
}

export { PokemonCard };
