import { MAKE_GUESS, NEW_GAME } from '../actions/game'

const reducer = (state = [], action= {}) => {
  switch (action.type) {
    case NEW_GAME:
      return []
    case MAKE_GUESS:
      if (state.includes(action.payload)) {return state} else {return [...state,action.payload]};
    default:
      return state;
  }
}

export default reducer
