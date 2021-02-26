import countriesTpl from "../templates/countries-list.hbs";
import countryTpl from "../templates/countries-item.hbs";
import { markupContainerRef } from "./refs";
import alert from "./notify";
​
function updateCountriesList(data) {
    const markupAll = countriesTpl(data);
    const markupOne = countryTpl(data);
​
  if (data.length === 1) {
    markupContainerRef.insertAdjacentHTML("beforeend", markupOne);
    return;
  }
​
  if (data.length > 10) {
    alert({
      type: "error",
      text: "Too many matches found. Please enter a more specific query!",
      delay: 2000,
    });
    return;
  }
​
  markupContainerRef.insertAdjacentHTML("beforeend", markupAll);
}
​
export default updateCountriesList;