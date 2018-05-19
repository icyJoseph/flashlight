import fs from 'fs';

const FILENAME = 'searches.json';

let didLoad = false;
const searches = [];

export function restoreSearches() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      didLoad = true;
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve([]);
      } else {
        if (txt) {
          searches.push(...JSON.parse(txt));
        }
        resolve(searches);
      }
    });
  });
}

export function saveSearches() {
  if (didLoad) {
    fs.writeFileSync(FILENAME, JSON.stringify(searches));
  }
}

export function createSearch(search) {
  searches.push(search);
}

export function getSearches() {
  return searches;
}

export function getActiveSearches() {
  return searches.filter(search => search.active);
}
