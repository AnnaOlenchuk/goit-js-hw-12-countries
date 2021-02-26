function fetchCounries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(`Something wrong with request ${error}`));
}

export default fetchCounries;