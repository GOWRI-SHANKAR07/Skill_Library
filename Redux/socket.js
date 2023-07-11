import io from 'socket.io-client';
// const socket = io('http://192.168.1.2:8080');
const socket = io('https://skill-library-z3yqxcc25q-uk.a.run.app/');
socket.connect();
export default socket;
