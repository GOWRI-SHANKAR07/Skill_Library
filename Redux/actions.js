import {
  SET_Authentication_State,
  ADD_USER_LOCATION,
  ADD_NAME,
  ADD_USER_SKILL,
  ADD_USER_PHONENUMBER,
  IS_OLD_USER,
  SET_SEARCH_RESULT,
  SET_REFRESH,
  SET_USER_TAGLINE,
  ADD_USER_NAME,
  ADD_USER_GENDER,
  ADD_USER_DOB,
  ADD_USER_ROLE,
  ADD_USER_DESCRIPTION,
} from './actionTypes';

export const setPhoneNumber = number => ({
  type: ADD_USER_PHONENUMBER,
  payload: number,
});

export const setName = name => ({
  type: ADD_NAME,
  payload: name,
});

export const setSkill = skill => ({
  type: ADD_USER_SKILL,
  payload: skill,
});

export const setLocation = (longitude, latitude) => dispatch => {
  dispatch({
    type: ADD_USER_LOCATION,
    longitude: longitude,
    latitude: latitude,
  });
};
export const setSearchResult = data => dispatch => {
  dispatch({
    type: SET_SEARCH_RESULT,
    payload: data,
  });
};

export const SetAuthenticationState = authState => dispatch => {
  dispatch({
    type: SET_Authentication_State,
    payload: authState,
  });
};

export const setOldUser = oldUser => dispatch => {
  dispatch({
    type: IS_OLD_USER,
    payload: oldUser,
  });
}

export const setRefresh = value => dispatch => {
  dispatch({
    type: SET_REFRESH,
    payload: value,
  });
}

export const setUserTagline = tagline => dispatch => {
  dispatch({
    type: SET_USER_TAGLINE,
    payload: tagline,
  });
};

export const setUserName = username => dispatch => {
  dispatch({
    type: ADD_USER_NAME,
    payload: username,
  });
};

export const setUserGender = gender => dispatch => {
  dispatch({
    type: ADD_USER_GENDER,
    payload: gender,
  });
};

export const setUserDob = dob => dispatch => {
  dispatch({
    type: ADD_USER_DOB,
    payload: dob,
  });
};

export const setUserDescription = description => dispatch => {
  dispatch({
    type: ADD_USER_DESCRIPTION,
    payload: description,
  });
};

export const setUserRole = role => dispatch => {
  dispatch({
    type: ADD_USER_ROLE,
    payload: role,
  });
};