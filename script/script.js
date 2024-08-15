const colors = [
  "black",
  "silver",
  "gray",
  "white",
  "maroon",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "olive",
  "yellow",
  "navy",
  "blue",
  "teal",
  "aqua",
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",

  "darkseagreen",

  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",

  "darkviolet",

  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",

  "dodgerblue",

  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",

  "gainsboro",

  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",

  "green",

  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",

  "indianred",

  "indigo",
  "ivory",
  "khaki",
  "lavender",

  "lavenderblush",

  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",

  "lightcyan",

  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",

  "lightpink",

  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",

  "lightslategrey",

  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",

  "linen",

  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",

  "mediumorchid",

  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",

  "mediumturquoise",

  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",

  "moccasin",

  "navajowhite",
  "navy",
  "oldlace",
  "olive",

  "olivedrab",

  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",

  "palegreen",

  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",

  "peru",

  "pink",
  "plum",
  "powderblue",
  "purple",

  "red",

  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",

  "sandybrown",

  "seagreen",
  "seashell",
  "sienna",
  "silver",

  "skyblue",

  "slateblue",
  "slategray",
  "slategrey",
  "snow",

  "springgreen",

  "steelblue",
  "tan",
  "teal",
  "thistle",

  "tomato",

  "turquoise",
  "violet",
  "wheat",
  "white",

  "whitesmoke",

  "yellow",
  "yellowgreen",
];
const nodeList = document.querySelectorAll("*");

async function changeBackground(text, speed = 10) {
  while (true) {
    for (i = nodeList.length / 10; i > 0; i--) {
      nodeList[Math.floor(Math.random() * nodeList.length)].style.background =
        colors[Math.floor(Math.random() * colors.length)];
      if (text) {
        nodeList[Math.floor(Math.random() * nodeList.length)].style.color =
          colors[Math.floor(Math.random() * colors.length)];
      }
    }
    await new Promise((r) => setTimeout(r, speed));
  }
}

window.onload = async function () {
  const data = await chrome.storage.sync.get();
  const turned_on = data.turned_on;
  const text_on = data.text_on;
  const crazy_speed = data.crazy_speed;
  if (!turned_on) return;
  changeBackground(text_on, crazy_speed);
};
