import axios from 'axios';
import {APIURI} from './APIconfigs';
export const CheckOldUser = async phonenumber => {
  await axios
    .post(`${APIURI}user/login`, {
      // phone: user.phoneNumber.slice(3),
      phone: '7010777890',
    })
    .then(res => {
      console.log('from API', res.data);
      return res.data;
    })
    .catch(e => console.log(e));
};
