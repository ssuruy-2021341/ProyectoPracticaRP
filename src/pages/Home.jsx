import React from 'react'
import PokemonList from '../components/PokemonList'
import "../assets/Home.css";

const Home = () => {
    return (
        <>
            <div className='body'>
                <div className="header">
                    <h1>Pokemon List</h1>
                    <p>Explora la lista de Pokémon</p>
                    <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">
                        <button className="poke-api-button">Ir a la PokeAPI</button>
                    </a>
                </div>


                <div className='pokemon-list'>
                    <PokemonList />
                </div>

                <div className="footer">
                    <p>© 2023 Sergio Román Sury Godinez - 2021341</p>
                </div>
            </div>
        </>
    )
}

export default Home
