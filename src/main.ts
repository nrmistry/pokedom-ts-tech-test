import "./styles/style.scss";
import {pokemonArray} from './data/pokemon';
import "./data/types";

const pokemonContainer = document.getElementById('pokemon-container') as HTMLElement;

if (pokemonContainer) {
  pokemonArray.forEach((pokemon) => {
    const cardHTML = `
      <div class="card">
        <img src="${pokemon.sprite}" alt="${pokemon.name}" />
        <h3>${pokemon.name}</h3>
        <p>ID: ${pokemon.id}</p>
        <p>Types: ${pokemon.types.join(', ')}</p>
      </div>
    `;
    pokemonContainer.innerHTML += cardHTML;
  });
}

pokemonContainer.style.display = 'flex' 
pokemonContainer.style.flexWrap = 'wrap';
pokemonContainer.style.justifyContent = 'space-around';
pokemonContainer.style.marginTop = '1rem';
pokemonContainer.style.display = 'grid';
pokemonContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(10rem, 1fr))';
pokemonContainer.style.gap = '1rem';
pokemonContainer.style.justifyItems ='center';
