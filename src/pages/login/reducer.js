import { ACTIONS } from './actions';

const initialState = {
  token: '',
};

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN: {
      const { token } = action;

      return {
        ...state,
        token,
      };
    }

    default:
      return state;
  }
};

export default reducerLogin;
