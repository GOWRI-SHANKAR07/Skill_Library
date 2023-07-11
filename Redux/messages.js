const GET_MESSAGES = 'GET_MESSAGES';
// const GOT_NEW_MESSAGE = 'GOT_NEW_MESSAGE';
const GET_inbox_list = 'GET_inbox_list';
// const GET_M

export const getInboxlist = inboxlist => ({type: GET_inbox_list, inboxlist});
export const getMessages = userMessage => ({type: GET_MESSAGES, userMessage});
// export const gotNewMessage = message => ({type: GOT_NEW_MESSAGE, message});

const initialMessageState = {
  inboxUsers: null,
  userMessages: null,
};

const reducer = (state = initialMessageState, action) => {
  switch (action.type) {
    case GET_inbox_list:
      return {...state, inboxUsers: action.inboxlist};
    case GET_MESSAGES:
      return {...state, userMessages: action.userMessage};
    default:
      return state;
  }
};

export default reducer;
