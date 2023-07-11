import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './reducers';

// import { createStore, combineReducers } from 'redux';
import users, {gotUsers, gotNewUser} from './users';
import messages, {
  getInboxlist,
  getMessages,
  gotMessages,
  gotNewMessage,
} from './messages';
// import user, { gotUser } from './user';
import socket from './socket';

const rootReducer = combineReducers({mainReducer, users, messages});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

socket.on('message', message => {
  console.log(message);
});

export const inboxParticipants = ids => {
  socket.emit('inboxParticipants', JSON.stringify({id: ids}));
};
socket.on('inboxList', inboxList => {
  console.log('inboxUpdated');
  Store.dispatch(getInboxlist(inboxList.inboxlist));
});

// socket.on('priorMessages', messages => {
//   store.dispatch(gotMessages(messages));
// });

export const openChat = userid => {
  console.log('asking');
  socket.emit('openChat', JSON.stringify({id: userid}));
};

socket.on('chatMessages', allmessages => {
  console.log('getting messages\n');
  Store.dispatch(getMessages(allmessages.AllMessage));
});

// export const sendMessage = (text, sender, receiver) => {
//   socket.emit('message', {text, sender, receiver});
// };

export const sendMessage = message => {
  socket.emit('newMessage', JSON.stringify(message));
};

export * from './users';
export * from './messages';
