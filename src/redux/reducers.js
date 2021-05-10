import {GET_CHARS} from './actions';
const initialState = {
  characters: [],
};

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARS:
      return {...state, characters: action.payload};
    default:
      return state;
  }
};

export default charReducer;
