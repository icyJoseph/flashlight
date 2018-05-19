import { Router } from 'express';
import { getUser } from '../../repository/user';
import { getActiveSearches } from '../../repository/search';

const router = Router();

// Match for an event
router.post('/search', (req, res) => {
  const search = req.body.search;
  const match = getMatch(search);
  res.send({
    match
  })
});

function getMatch(search) {
  const activeSearches = getActiveSearches();
  activeSearches.filter(activeSearch => isWithinAgeSpan(search, activeSearch))
          .filter(activeSearch => isWithinDistance(search, activeSearch))
          .filter(activeSearch => isWithinAgeSpan(activeSearch, search))
          .filter(activeSearch => isWithinDistance(activeSearch, search))
          .map(activeSearch => scoreMatch(search, activeSearch))
          .sort((a,b) => b.matchScore - a.matchScore);
  return activeSearches.length > 0 ? activeSearches[0] : null;
}

function isWithinAgeSpan(s1, s2) {
  return true;
}

function isWithinDistance(s1, s2) {
  return true;
}

function scoreMatch(s1, s2) {
  const user = getUser(s1.participants[0]);
  return {
    ...s2,
    matchScore: Math.max.apply(
      ...s2.participants.map(id => scoreInterestSimilarity(user, getUser(id)))
    )
  }
}

function scoreInterestSimilarity(u1, u2) {
  let score = 0;
  for (interest of u1.interests) {
    score += u2.interests.indexOf(interest) >= 0 ? 1 : 0;
  }
  return score;
}

export default router;
