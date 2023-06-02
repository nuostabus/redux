import { initialState } from './initialState';

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT': {
      const copy = { ...state };
      copy.count += 1;
      return copy;
    }
    case 'DECREMENT': {
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }
    case 'RESET': {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }
    default:
      return initialState;
  }
}
