let movie = {
  name: 'kill mon',
  releasedYear: 2019,
  rate: 4,
  director: 'hisham'
};

function showStringPropreties(obj) {
  for (const iterator in obj) {
    if (typeof obj[iterator] === 'string') {
      console.log(iterator, obj[iterator]);
    }
  }
}

showStringPropreties(movie);
