import jedi from "./img/jedi.png";
import { darkBlack } from "material-ui/styles/colors";

export const paths = ["history", "flashlight", "add", "me"];

export const info = {
  title: "Brunch this weekend?",
  person: { name: "Brendan", lastname: "Lim" },
  description: `I'll be in your neighborhood doing errands this weekend. Do you
    want to grab brunch?`,
  image: jedi,
  color: darkBlack
};

export const events = info =>
  Array.from(
    new Array(20),
    (x, i) =>
      i % 2 === 0
        ? { ...info, left: true, id: `${i}-info.title`, featured: i % 3 === 0 }
        : { ...info, id: `${i}-info.title`, left: false, featured: i % 3 === 0 }
  );
