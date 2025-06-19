import { useState, useEffect } from 'react';

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState();
  const [selectedPokemonData, setSelectedPokemonData] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (!selectedPokemonUrl) {
      return;
    }

    fetch(selectedPokemonUrl)
      .then((response) => response.json())
      .then((data) => {
        setSelectedPokemonData(data);
      })
      .catch((error) =>
        console.error('Error fetching selected Pokémon:', error)
      );
  }, [selectedPokemonUrl]);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemonUrl(pokemon.url);
  };

  return (
    <>
      <h1>Pokedex!</h1>

      <div
        style={{
          display: 'flex',
          height: '600px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            width: '300px',
            height: '100%',
            overflowY: 'auto',
            background: '#f5f5f5',
            borderRight: '1px solid #ddd',
            padding: '0',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              position: 'sticky',
              top: 0,
              background: '#f5f5f5',
              zIndex: 1,
              padding: '16px',
              borderBottom: '1px solid #ddd',
            }}
          >
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                fontSize: '16px',
              }}
            />
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              color: 'deepskyblue',
              cursor: 'pointer',
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {filteredPokemonList.map((pokemon) => (
              <li
                key={pokemon.name}
                style={{ padding: '8px 16px' }}
                onClick={() => handlePokemonSelect(pokemon)}
              >
                {pokemon.name}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            width: '900px',
            height: '100%',
            padding: '32px',
            background: '#fff',
          }}
        >
          <h2>Main Display Area</h2>
          {selectedPokemonData && (
            <>
              <img
                src={selectedPokemonData.sprites.front_default}
                alt={selectedPokemonData.name}
              />
              <li>name: {selectedPokemonData.name}</li>
              <li>height: {selectedPokemonData.height}</li>
              <li>weight: {selectedPokemonData.weight}</li>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default PokedexPage;
