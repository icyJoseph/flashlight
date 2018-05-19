import fs from 'fs';

const FILENAME = 'searches.json';

const searches = [];

export function restoreSearches() {
  return new Promise(resolve => {
    fs.readFile(FILENAME, 'utf8', (err, txt) => {
      if (err) {
        console.error('Could not open ' + FILENAME);
        resolve([]);
      } else {
        searches.push(...JSON.parse(txt));
        resolve(searches);

        console.log(searches);
      }
    });
  });
}

export function saveSearches() {
  if (searches) {
    fs.writeFileSync(FILENAME, searches.toString());
  }
}

export function createSearch(search) {
  searches.push(search);
}

export function getSearches() {
  return searches;
}
