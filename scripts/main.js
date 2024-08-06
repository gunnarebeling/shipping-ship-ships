import { dockList } from "./dockList.js";
import { haulerList } from "./haulerList.js";
import { cargoList } from "./cargoList.js";
const containerElement = document.getElementById("content");
const docksHTML = dockList();
const haulersHTML = haulerList();
const cargoHTML = cargoList();
containerElement.innerHTML = docksHTML + haulersHTML + cargoHTML;
