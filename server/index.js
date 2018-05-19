import express from "express";
import bodyParser from "body-parser";
import expressSession from "express-session";
import FileStore from "session-file-store";

import api from "./api";

import { saveUsers, restoreUsers } from "./repository/user";
import { saveSearches, restoreSearches } from "./repository/search";
import { saveEvents, restoreEvents } from "./repository/event";

process.stdin.resume();

restoreData();
saveDataOnExit();

const app = express();
setupApp(app);

app.listen(3333, () => console.log("Started server"));

function restoreData() {
  Promise.all([restoreUsers(), restoreEvents(), restoreSearches()])
    .then(() => console.log("Restored data"))
    .catch(err => console.error(`Could not restore data: ${err}`));
}

function saveDataOnExit() {
  process.once("SIGINT", () => {
    saveAll();
    process.exit(0);
  });
  process.on("uncaughtException", e => {
    console.error(e);
    saveAll();
  });
  process.once("SIGUSR2", () => {
    saveAll();
    process.exit(0);
  });
}

function saveAll() {
  console.log("Saving!");

  saveUsers();
  saveSearches();
  saveEvents();
}

function setupApp(app) {
  app.use(bodyParser.json());
  app.use(expressSession({
    secret: 'top secret',
    resave: false,
    saveUninitialized: false,
    store: new (FileStore(expressSession))()
  }));

  app.use("/api", api);
}
