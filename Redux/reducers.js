import {
  ADD_USER_LOCATION,
  ADD_NAME,
  ADD_USER_PHONENUMBER,
  ADD_USER_SKILL,
  IS_OLD_USER,
  SET_Authentication_State,
  SET_REFRESH,
  SET_SEARCH_RESULT,
  SET_USER_TAGLINE,
  ADD_USER_NAME,
  ADD_USER_GENDER,
  ADD_USER_DOB,
  ADD_USER_ROLE,
  ADD_USER_DESCRIPTION,
} from './actionTypes';

const initialState = {
  authState: '',
  oldUser: '',
  phonenumber: 0,
  name: '',
  username: '',
  gender: '',
  dob: '',
  description: '',
  role: '',
  skill: '',
  longitude: '',
  latitude: '',
  searchResult: '',
  refresh: false,
  tagline: ''
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, name: action.payload };

    case ADD_USER_SKILL:
      return {
        ...state,
        skill: action.payload,
      };

    case ADD_USER_LOCATION:
      return { ...state, longitude: action.longitude, latitude: action.latitude };

    case ADD_USER_PHONENUMBER:
      return { ...state, phonenumber: action.payload };

    case SET_Authentication_State:
      return { ...state, authState: action.payload };

    case IS_OLD_USER:
      return { ...state, oldUser: action.payload };

    case SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };

    case SET_REFRESH:
      return { ...state, refresh: action.payload };
      return { ...state, searchResult: action.payload };

    case SET_USER_TAGLINE:
      return { ...state, tagline: action.payload };

    case ADD_USER_NAME:
      return { ...state, username: action.payload };

    case ADD_USER_GENDER:
      return { ...state, gender: action.payload };

    case ADD_USER_DOB:
      return { ...state, dob: action.payload };

    case ADD_USER_DESCRIPTION:
      return { ...state, description: action.payload };

    case ADD_USER_ROLE:
      return { ...state, role: action.payload };

    default:
      return state;
  }
}

export default mainReducer;
