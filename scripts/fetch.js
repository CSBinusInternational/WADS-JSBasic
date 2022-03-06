// Fetch

fetch("https://api.github.com/users/digaji")
  .then(response => response.json())
  .then(data => console.log(data));

// The fetch command is to get data from a certain url endpoint