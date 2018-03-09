import { db } from './firebase';

// User API
export const addUser = (id, email, username) => {
  db.ref('users' + id).set({
    id,
    username,
    email,
  });
};
