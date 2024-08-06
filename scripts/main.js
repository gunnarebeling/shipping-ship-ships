import { dockList } from "./dockList.js";
import { haulerList } from "./haulerList.js";
const containerElement = document.getElementById("content");
const docksHTML = dockList();
const haulersHTML = haulerList();
containerElement.innerHTML = docksHTML + haulersHTML;
