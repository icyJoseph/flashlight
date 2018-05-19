import { Router } from "express";

import { createUser, getUsers, getUser } from "../../repository/user";

const router = Router();

// Input: user without id: {username, password }
// 
// Output: 
// 200: User with id
// 400: Username taken
router.post("/create", (req, res) => {
	const body = req.body;
	
	if (getUsers().some(({ username }) => username === body.username)) {
		console.log('Username is taken');
		res.sendStatus(409);
		return;
	} 

	if (!req.body.username || !req.body.password) {
		console.log('Invalid body');
		res.sendStatus(400);
		return;
	}


  const user = createUser(body);

  console.log(`created user: ${JSON.stringify(user)}`);

  res.send(user);
});

// Get user by id
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = getUser(userId);
  console.log(user);
  res.send(getUser(userId));
});

// Input: {username, password}
// Output: User (and cookie)
router.post("/login", (req, res) => {
  const matched = getUsers().filter(
    ({ username, password }) =>
      username == req.body.username && password == req.body.password
  );

  if (matched.length == 0) {
    console.log("Could not find user");

    res.sendStatus(404);
  } else {
    const user = matched[0];

    console.log(`Logged in ${JSON.stringify(user)}`);

		req.session.user = user;

    res.send(user);
  }
});

export default router;
