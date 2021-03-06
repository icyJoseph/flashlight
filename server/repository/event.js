import fs from 'fs';

const FILENAME = 'events.json';

let didLoad = false;
const events = [];

let eventId = 0;

export function restoreEvents() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      didLoad = true;
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve(events);
      } else {
        if (txt) {
          events.push(...JSON.parse(txt));
        }
        eventId = Math.max(0, ...events.map(({ id }) => id));
        resolve(events);
      }
    });
  });
}

export function saveEvents() {
  if (didLoad) {
    fs.writeFileSync(FILENAME, JSON.stringify(events));
  }
}

export function createEvent(event) {
  event.id = eventId;
  ++eventId;
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