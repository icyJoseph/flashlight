import { Router } from "express";
import { createEvent, getEvents } from "../../repository/event";

const router = Router();

// Get event list
router.get("/list", (req, res) => {
  res.send(getEvents());
});

// Create event
router.post("/create", (req, res) => {
  if (req.body != null) {
    createEvent(
      eventCreator(
				req.body.title,
				req.session.user.name,
        req.body.location,
        req.body.participants,
        req.body.description,
        req.body.activity
      )
    );
  }
});

router.post("/for-me", (req, res) => {
	const user = req.body;
  if (!user) {
    res.sendStatus(400);
    return;
	}
	

	const interests = user.interests;
  const events = getEvents().filter(({ activity }) =>
    interests.some(i => i === activity)
	);
	
	res.send(events);
});

function eventCreator(title, author, location, participants, description, activity) {
  const event = {
		title: title,
		author, 
    location: location,
    participants: participants,
    description: description,
    activity: activity
  };

  return event;
}

export default router;
