const RETRIEVE = 'RETRIEVE';
const LIST = 'LIST';
const DETAILS = 'DETAILS';

export const retrieveAction = () => ({
  type: RETRIEVE,
});

export const listAction = () => ({
  type: LIST,
});

export const detailsAcion = () => ({
  type: DETAILS,
});

import axios from 'axios';

export const GET_CHARS = 'GET_CHARS';

export const GetCharacters = () => {
  try {
    return async dispatch => {
      const res = await axios.get(
        'https://www.anapioficeandfire.com/api/characters',
      );
      if (res.data) {
        dispatch({
          type: GET_CHARS,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error.data);
  }
};
