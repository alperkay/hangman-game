import { NEW_GAME } from '../actions/game'


export const initialState = {}

const reducer = (state = initialState, action= {}) => {
  switch (action.type) {
    case NEW_GAME:
      return action.payload;
    default:
      return state;
  }
}

export default reducer
