async function searchCharacters() {
    const input = document.getElementById('searchInput').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    try{
        const response = await fetch(`https://api.jikan.moe/v3/search/character?q=${input}&anime=1535`);
        const data = await response.json();

        data.results.forEach(result => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(result.name));
        searchResults.appendChild(li);
      });
    }
    catch (error){
        console.error('Ошибка при запросе персонажей:', error);
    }
  }