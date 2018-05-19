import express from 'express';
import api from './api';

import { saveUsers, restoreUsers } from "./user-repository";
import { saveSearches, restoreSearches } from "./search-repository";
import { saveEvents, restoreEvents } from "./event-repository";

process.stdin.resume();

restoreData();
saveDataOnExit();

const app = express();

app.use('/api', api);

<<<<<<< HEAD
app.get("/api", (req, res) => {
  res.send("API response");
});

app.listen(3333, () => console.log("Started server"));

function restoreData() {
  Promise.all([restoreUsers(), restoreEvents(), restoreSearches()])
    .then(() => console.log("Restored data"))
    .catch((err) => console.error(`Could not restore data: ${err}`));
}

function saveDataOnExit() {
  process.on("SIGINT", () => { saveAll(); process.exit(0); });
  process.on("exit", () => { saveAll(); process.exit(0) });
  process.on("uncaughtException", (e) => { console.error(e); saveAll(); } );
}

function saveAll() {
  console.log('Saving!');

  saveUsers();
  saveSearches();
  saveEvents();
}
=======
app.listen(3333, () => console.log('Started server'));
>>>>>>> api
