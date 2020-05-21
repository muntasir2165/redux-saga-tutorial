import { Types } from '../actions/users';

const INITIAL_STATE = {
  items: [],
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS: {
      console.log(action.payload.items);
      return { items: action.payload.items };
    }
    default: {
      return state;
    }
  }
}
