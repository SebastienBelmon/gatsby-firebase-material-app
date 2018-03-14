import { db } from './firebase';

// User API
export const addUser = (id, email, username, role) => {
  db.ref('users' + id).set({
    id,
    username,
    email,
    role,
  });
};

export const getUser = id => {
  db
    .ref('/users/' + id)
    .once('value')
    .then(snap => {
      return snap.val();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};
