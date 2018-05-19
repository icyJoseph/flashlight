import fs from 'fs';

const FILENAME = 'events.json';

const events = [];

export function restoreEvents() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve(events);
      } else {
        events.push(...JSON.parse(txt));
        resolve(events);

        console.log(events);
      }
    });
  });
}

export function saveEvents() {
  if (events) {
    fs.writeFileSync(FILENAME, events.toString());
  }
}

export function createEvent(event) {
  events.push(event);
}

export function getEvents() {
  return events;
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