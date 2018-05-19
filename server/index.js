import express from 'express';
import api from './api';

import { saveUsers, restoreUsers } from './user-repository';
import { saveSearches, restoreSearches } from './search-repository';
import { saveEvents, restoreEvents } from './event-repository';

process.stdin.resume();

restoreData();
saveDataOnExit();

const app = express();

app.use('/api', api);

app.listen(3333, () => console.log('Started server'));

function restoreData() {
	Promise.all([restoreUsers(), restoreEvents(), restoreSearches()])
		.then(() => console.log('Restored data'))
		.catch(err => console.error(`Could not restore data: ${err}`));
}

function saveDataOnExit() {
	process.on('SIGINT', () => {
		saveAll();
		process.exit(0);
	});
	process.on('exit', () => {
		saveAll();
		process.exit(0);
	});
	process.on('uncaughtException', e => {
		console.error(e);
		saveAll();
  });
  process.on('SIGUSR2', saveAll);
}

function saveAll() {
	console.log('\nSaving!\n');

	saveUsers();
	saveSearches();
	saveEvents();
}
