import { blue, red } from "./button-styles";

const top = document.createElement("div");
top.innerText = "Top of Footer";
top.style = blue;
const bottom = document.createElement("div");
bottom.innerText = "Bottom of Footer";
bottom.style = red;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export { top, bottom, footer };
