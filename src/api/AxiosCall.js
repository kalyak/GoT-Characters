import axios from 'axios';

const GetCharacters = () => {
  return axios
    .get('https://www.anapioficeandfire.com/api/characters')
    .then(response => {
      return response.data;
    })
    .catch(error => {
      error.data;
    });
};

export default GetCharacters;
