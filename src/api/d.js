import axios from 'axios';

const GetCharacters = setCharacters => {
  return axios
    .get('https://www.anapioficeandfire.com/api/characters')
    .then(response => {
      setCharacters(response.data[0].url);
    })
    .catch(error => {
      error.data;
    });
};

export default GetCharacters;
