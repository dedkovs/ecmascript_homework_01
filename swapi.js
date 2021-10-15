const fetchSwapiButton = document.getElementById('fetchSwapiButton');
const swapiLoadingStatus = document.getElementById('swapiLoadingStatus');

const fetchSwapiAsync = async () => {
  swapiLoadingStatus.innerHTML = 'loading data...';
  try {
    let response = await fetch('https://swapi.dev/api/people/1');
    if (response.ok) {
      swapiLoadingStatus.innerHTML = 'data loaded successfully';
      let parsedResponse = await response.json();
      console.log(parsedResponse);
    } else throw 'failed to load data';
  } catch (err) {
    swapiLoadingStatus.innerHTML = err;
  }
};

fetchSwapiButton.addEventListener('click', fetchSwapiAsync);

console.log('%c\n*** SWAPI ***', 'color: dodgerblue');
