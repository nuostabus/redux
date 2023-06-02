import { initialState } from './initialState';
import { DECREMENT, INCREMENT, RESET, INCREMENT_BY_VALUE } from './types';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      const copy = { ...state };
      copy.count += 1;
      return copy;
    }
    case INCREMENT_BY_VALUE: {
      const copy = { ...state };
      copy.count += action.payload;
      return copy;
    }

    case DECREMENT: {
      if (state.count === 0) return; //check to prevent a value going below "0"
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }
    case RESET: {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      console.log('Reducer started or invalid reducer type, or a typo');
      return initialState;
  }
}
