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
  const activeSearches = getActiveSearches()
          .filter(activeSearch => isWithinAgeSpan(search, activeSearch))
          .filter(activeSearch => isWithinDistance(search, activeSearch))
          .filter(activeSearch => isWithinAgeSpan(activeSearch, search))
          .filter(activeSearch => isWithinDistance(activeSearch, search))
          .map(activeSearch => scoreMatch(search, activeSearch))
          .sort((a,b) => {
            return b.matchScore - a.matchScore
          });
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
  const matchScores = s2.participants.map(id => {
    const u2 = getUser(id);
    return scoreInterestSimilarity(user, u2)
  });
  const matchScore = Math.max(0, ...matchScores);
  return {
    ...s2,
    matchScore
  }
}

function scoreInterestSimilarity(u1, u2) {
  return u1.interests.filter(interest => u2.interests.includes(interest)).length;
}

export default router;
