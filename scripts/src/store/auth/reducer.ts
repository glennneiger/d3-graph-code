/// <reference path="./types.d.ts" />
import { Reducer } from 'redux';

const initialState: AuthState = {
  loggedIn: false,
  profileData: null
};

const auth: Reducer<AuthState> = (state: AuthState = initialState, action): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loggedIn: true
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loggedIn: false
      };
    case 'RENDER_PROFILE':
      return {
        ...state,
        profileData: action.profileData
      };
    default:
      return state;
  }
};

export default auth;