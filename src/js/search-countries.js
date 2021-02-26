import { inputRef, markupContainerRef } from './js/refs';
import debounce from 'lodash/debounce';
import fetchCountries from './js/fetchCountries';
import updateCountriesList from './js/update-countries';
inputRef.addEventListener('input', debounce(searchCountries, 500));
​
function searchCountries(event) {
  const searchQuery = event.target.value;
​
  clearContainer();
  fetchCountries(searchQuery).then(updateCountriesList);
}
​
function clearContainer() {
  markupContainerRef.innerHTML = '';
}
