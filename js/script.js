 const pokemonName = document.querySelector('.pokemon_name');
 const pokemonNumber = document.querySelector('.pokemon_number');
 const pokemonImage = document.querySelector('.pokemon_image');
 const form = document.querySelector('.form');
 const input = document.querySelector('.input_search');
 const prevBtn = document.querySelector('.btn-prev');
 const nextBtn = document.querySelector('.btn-next');

 let searchPokemon = 1;


 const fetchPokemon = async (pokemon) => {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = await apiResponse.json();

    return data;
 };

 const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

    input.value = '';
 }

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    renderPokemon(input.value.toLowerCase());
});

prevBtn.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    } 
})

nextBtn.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
})

renderPokemon(searchPokemon);
