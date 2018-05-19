import jedi from "./img/jedi.png";
import football from "./img/football.png";
import react from "./img/react.png";
import { darkBlack } from "material-ui/styles/colors";

export const paths = ["history", "flashlight", "add", "me"];

export const today = "Today";
export const FlashLight = "FlashLight";
export const previously = "Previously...";

export const info = [
  {
    id: "1020202",
    title: "Brunch this weekend?",
    person: [{ name: "Brendan", lastname: "Lim" }],
    description: `I'll be in your neighborhood doing errands this weekend. Do you
    want to grab brunch?`,
    image: jedi,
    color: darkBlack
  },
  {
    id: "nasdldsad",
    title: "Football?",
    person: [
      { name: "Anna", lastname: "Andersson" },
      { name: "Joe", lastname: "Doe" },
      { name: "Jane", lastname: "Roe" }
    ],
    description: `Preparing for the World Cup`,
    image: football,
    color: darkBlack
  },
  {
    id: "React",
    title: "React MeetUp",
    person: [
      { name: "Joe", lastname: "Doe" },
      { name: "Anna", lastname: "Andersson" },
      { name: "Jane", lastname: "Roe" }
    ],
    description: `There'll be a coding session at this meetup, we should go!`,
    image: react,
    color: darkBlack,
    featured: true
  },
  {
    id: "200202202",
    title: "Anyone out there?",
    person: [{ name: "Brendan", lastname: "Lim" }],
    description: `Just arrived, what's up?`,
    image: jedi,
    color: darkBlack
  }
];

export const search = {
  id: 12929292,
  search: "Movie night",
  result: [info, info, info],
  timestamp: 999
};

export const HistoryData = {
  entries: [search, ...info]
};
