import fs from 'fs';

const FILENAME = 'users.json';

let didLoad = false;
const users = [];

let userId = 0;

export function restoreUsers() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      didLoad = true;
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve(users);
      } else {
        if (txt) {
          users.push(...JSON.parse(txt));
        }

        userId = Math.max(0, ...users.map(({ id }) => id));
        resolve(users);
      }
    });
  });
}

export function saveUsers() {
  if (didLoad) {
    fs.writeFileSync(FILENAME, JSON.stringify(users));
  }
}

export function createUser(user) {
  ++userId;
  user.id = userId;

  users.push(user);

  return user;
}

export function getUsers() {
  return users;
}

export function updateUser(userId, user) {
  const i = users.findIndex(({ id }) => id === userId);

  if (i != -1) {
    users[i] = user;
  } else {
    console.error('User not found');
  }

  return users;
}

export function getUser(userId) {
  return users.find(({ id }) => id === userId);
}