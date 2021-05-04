// import GetCharacters from '../api/AxiosCall';

import {GET_CHARS} from './actions';
const initialState = {
  characters: [],
};

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case RETRIEVE:
//       const data = GetCharacters();
//       return {
//         ...state,
//         characters: data,
//       };
//   }
// };

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARS:
      return {...state, movies: action.payload};
    default:
      return state;
  }
};

export default charReducer;
