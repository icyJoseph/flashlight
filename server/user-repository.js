import fs from 'fs';

const FILENAME = 'users.json';

const users = [];

export function restoreUsers() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve(users);
      } else {
        users.push(...JSON.parse(txt));
        resolve(users);

        console.log(users);
      }
    });
  });
}

export function saveUsers() {
  if (users) {
    fs.writeFileSync(FILENAME, users.toString());
  }
}

export function createUser(user) {
  users.push(user);
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