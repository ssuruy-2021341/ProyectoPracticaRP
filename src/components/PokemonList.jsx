import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/PokeStyles.css';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className="pokemon-card">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <div className="pokemon-types">
                {pokemon.types.map((type, index) => (
                    <span key={index} className={`type ${type.type.name}`}>
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

const PokemonList = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=50');
                const data = response.data;
                const results = data.results;

                const pokemonDetails = await Promise.all(
                    results.map(async (pokemon) => {
                        const res = await axios.get(pokemon.url);
                        return res.data;
                    })
                );

                setPokemonData(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchPokemon();
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="pokemon-list">
            <div className="pokemon-grid">
                {pokemonData.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
